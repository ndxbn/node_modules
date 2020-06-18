import { Logger, Context, TestHandler } from "../";

test("Logger.create() method returns a logger instance that has console logger", async (done) => {
  jest.spyOn(console, "log");

  const logger = Logger.create();
  await logger.debug("debug message");

  expect(console.log).toBeCalledTimes(1);

  done();
});

test("Logger.addHandler() method", async (done) => {
  const logger = new Logger();
  const handler = new TestHandler();
  logger.addHandler(handler);

  await logger.debug("a message");

  expect(handler.records.length).toBe(1);
  done();
});

test("context that added with Logger.addContext() method, always pass to handler", async (done) => {
  const handler = new TestHandler();
  const logger = new Logger([handler]);
  const fooContext = new Context([["foo", () => "FOO FOO"]]);

  logger.addContext(fooContext);

  // call logging method without context
  await logger.debug("debug foo");
  // but handler given {"foo": "FOO FOO"} context
  expect(handler.hasRecord({ message: "debug foo", context: fooContext })).toBe(
    true
  );
  // not empty context
  expect(
    handler.hasRecord({ message: "debug foo", context: new Context() })
  ).not.toBe(true);

  done();
});

test("context priority", async (done) => {
  const handler = new TestHandler();
  const fooBarContext = new Context([
    ["foo", () => "FOO FOO"],
    ["bar", () => "BAR BAR"],
  ]);
  const logger = new Logger([handler], fooBarContext);

  const fooBazContext = new Context([
    ["foo", () => "FOO BAR"],
    ["baz", () => "BAZ BAZ"],
  ]);
  await logger.debug("debug foo", fooBazContext);

  // "foo" will be over rode
  const fooBarBazContextOverRode = new Context([
    ["foo", () => "FOO BAR"],
    ["bar", () => "BAR BAR"],
    ["baz", () => "BAZ BAZ"],
  ]);
  // "foo" will not be over rode
  const fooBarBazContextAdded = new Context([
    ["foo", () => "FOO FOO"],
    ["bar", () => "BAR BAR"],
    ["baz", () => "BAZ BAZ"],
  ]);

  // if same name context is exists in args, it general context will over-ride.
  expect(
    handler.hasRecord({
      message: "debug foo",
      context: fooBarBazContextOverRode,
    })
  ).toBe(true);
  expect(
    handler.hasRecord({ message: "debug foo", context: fooBarBazContextAdded })
  ).not.toBe(true);

  done();
});
