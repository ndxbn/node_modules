import { TestHandler } from "./TestHandler";
import { Context } from "../Context";

describe("hasRecords method", () => {
  test("should return true when have records", async () => {
    const logger = new TestHandler();
    await logger.log("foo");

    expect(logger.hasRecords()).toBeTruthy();
  });

  test("should return false when does not have records", () => {
    const logger = new TestHandler();

    expect(logger.hasRecords()).toBeFalsy();
  });
});

describe("reset method", () => {
  test("after reset, handler has not any record", async () => {
    const handler = new TestHandler();
    await handler.log("foo");

    expect(handler.hasRecords()).toBeTruthy();
    handler.reset();
    expect(handler.hasRecords()).toBeFalsy();
  });
});

describe("hasRecord method", () => {
  test("should return true when have records", async () => {
    const handler = new TestHandler();
    await handler.log("foo");

    expect(
      handler.hasRecord({ message: "foo", context: new Context() })
    ).toBeTruthy();
  });

  test("should return false when does not have records", () => {
    const handler = new TestHandler();

    expect(
      handler.hasRecord({ message: "foo", context: new Context() })
    ).toBeFalsy();
  });
  test("should return false when does not have records: message", async () => {
    const handler = new TestHandler();
    await handler.log("foo");

    expect(
      handler.hasRecord({ message: "bar", context: new Context() })
    ).toBeFalsy();
  });
  test("should return false when does not have records: context", async () => {
    const handler = new TestHandler();
    await handler.log("foo");

    expect(
      handler.hasRecord({
        message: "foo",
        context: new Context([["bar", () => "baz"]])
      })
    ).toBeFalsy();
  });
});

describe("hasRecordThatContains method", () => {
  test("should return true when have records", async () => {
    const handler = new TestHandler();
    await handler.log("foo bar");

    expect(handler.hasRecordThatContains("foo")).toBeTruthy();
    expect(handler.hasRecordThatContains("o b")).toBeTruthy();
  });

  test("should return false when does not have records", async () => {
    const handler = new TestHandler();
    await handler.log("foo bar");

    expect(handler.hasRecordThatContains("baz")).toBeFalsy();
    expect(handler.hasRecordThatContains("ob")).toBeFalsy();
  });
});

describe("hasRecordThatMatches method", () => {
  test("should return true when have records", async () => {
    const handler = new TestHandler();
    await handler.log("foo bar");

    expect(handler.hasRecordThatMatches(/^foo.*/)).toBeTruthy();
    expect(handler.hasRecordThatMatches(/bar$/)).toBeTruthy();
  });

  test("should return false when does not have records", async () => {
    const handler = new TestHandler();
    await handler.log("foo bar");

    expect(handler.hasRecordThatMatches(/zzz/)).toBeFalsy();
  });
});
