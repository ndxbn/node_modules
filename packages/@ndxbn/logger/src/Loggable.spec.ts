import { Loggable } from "./Loggable";
import { TestLogger } from "./TestLogger";
import { Context } from "./Context";

class Base {
  public double(name: string): string {
    return name.repeat(2);
  }
}

class Target extends Loggable(Base) {
  public double(name: string): string {
    this.logger.debug(name);

    return super.double(name);
  }
}

test("loggable trait basic usage", () => {
  const target = new Target();
  target.logger = new TestLogger();
  expect((target.logger as TestLogger).hasRecords("debug")).toBe(false);

  target.double("foo");

  // wait to write log
  // Target.double calls logger.debug, but not await.
  let written = false;
  while (written === false) {
    if ((target.logger as TestLogger).hasRecords("debug") === true) {
      written = true;
    }
  }

  expect(
    (target.logger as TestLogger).hasRecord({
      message: "foo",
      level: "debug",
      context: new Context()
    })
  ).toBe(true);
});
