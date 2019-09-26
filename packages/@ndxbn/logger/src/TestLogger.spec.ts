import TestLogger from "./TestLogger";

describe("hasRecords method", () => {
  test("should return true when have records", async () => {
    const logger = new TestLogger();
    await logger.info("foo");

    expect(logger.hasRecords("info")).toBeTruthy();
  });

  test("should return false when does not have records", () => {
    const logger = new TestLogger();

    expect(logger.hasRecords("info")).toBeFalsy();
  });
  test("should return false when does not records but have other loglevel record,", async () => {
    const logger = new TestLogger();
    await logger.debug("foo");

    expect(logger.hasRecords("info")).toBeFalsy();
  });
});

describe("reset method", () => {
  test("after reset, logger has not any record", async () => {
    const logger = new TestLogger();
    await logger.info("foo");

    expect(logger.hasRecords("info")).toBeTruthy();
    logger.reset();
    expect(logger.hasRecords("info")).toBeFalsy();
  });
});

describe("hasRecord method", () => {
  test("should return true when have records", async () => {
    const logger = new TestLogger();
    await logger.info("foo");

    expect(
      logger.hasRecord({ level: "info", message: "foo", context: new Map() })
    ).toBeTruthy();
  });

  test("should return false when does not have records", () => {
    const logger = new TestLogger();

    expect(
      logger.hasRecord({ level: "notice", message: "foo", context: new Map() })
    ).toBeFalsy();
  });
  test("should return false when does not have records: loglevel", async () => {
    const logger = new TestLogger();
    await logger.info("foo");

    expect(
      logger.hasRecord({ level: "warning", message: "foo", context: new Map() })
    ).toBeFalsy();
  });
  test("should return false when does not have records: message", async () => {
    const logger = new TestLogger();
    await logger.info("foo");

    expect(
      logger.hasRecord({ level: "info", message: "bar", context: new Map() })
    ).toBeFalsy();
  });
  test("should return false when does not have records: context", async () => {
    const logger = new TestLogger();
    await logger.info("foo");

    expect(
      logger.hasRecord({
        level: "info",
        message: "foo",
        context: new Map([["bar", () => "baz"]])
      })
    ).toBeFalsy();
  });
});

describe("hasRecordThatContains method", () => {
  test("should return true when have records", async () => {
    const logger = new TestLogger();
    await logger.info("foo bar");

    expect(logger.hasRecordThatContains("foo", "info")).toBeTruthy();
    expect(logger.hasRecordThatContains("o b", "info")).toBeTruthy();
  });

  test("should return false when does not have records", async () => {
    const logger = new TestLogger();
    await logger.info("foo bar");

    expect(logger.hasRecordThatContains("baz", "info")).toBeFalsy();
    expect(logger.hasRecordThatContains("ob", "info")).toBeFalsy();
  });

  test("should return false when does not records but have other loglevel record,", async () => {
    const logger = new TestLogger();
    await logger.warning("foo bar");

    expect(logger.hasRecordThatContains("foo", "info")).toBeFalsy();
    expect(logger.hasRecordThatContains("o b", "info")).toBeFalsy();
  });
});

describe("hasRecordThatMatches method", () => {
  test("should return true when have records", async () => {
    const logger = new TestLogger();
    await logger.info("foo bar");

    expect(logger.hasRecordThatMatches(/^foo.*/, "info")).toBeTruthy();
    expect(logger.hasRecordThatMatches(/bar$/, "info")).toBeTruthy();
  });

  test("should return false when does not have records", async () => {
    const logger = new TestLogger();
    await logger.info("foo bar");

    expect(logger.hasRecordThatMatches(/zzz/, "info")).toBeFalsy();
  });

  test("should return false when does not records but have other loglevel record,", async () => {
    const logger = new TestLogger();
    await logger.warning("foo bar");

    expect(logger.hasRecordThatMatches(/^foo.*/, "info")).toBeFalsy();
    expect(logger.hasRecordThatMatches(/bar$/, "info")).toBeFalsy();
  });
});
