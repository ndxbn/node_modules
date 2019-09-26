import ConsoleLogHandler from "./ConsoleLogHandler";
import { Context } from "../Context";

test("ConsoleLogHandler should write with console.log() method", async done => {
  jest.spyOn(console, "log");

  const handler = new ConsoleLogHandler();
  await handler.log("foo", new Context());

  expect(console.log).toBeCalledTimes(1);

  done();
});
