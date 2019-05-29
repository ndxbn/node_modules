import Logger from "../";

test("Logger.create() method returns a logger instance that has console logger", async done => {
  jest.spyOn(console, "log");

  const logger = Logger.create();
  await logger.debug("debug message");

  expect(console.log).toBeCalledTimes(1);

  done();
});
