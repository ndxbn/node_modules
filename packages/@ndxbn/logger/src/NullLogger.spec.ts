import { NullLogger } from "./NullLogger";

test("NullLogger should have log method", async () => {
  const logger = new NullLogger();

  expect(await logger.log()).toBeUndefined();
});
