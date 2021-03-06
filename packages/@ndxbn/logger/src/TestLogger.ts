import { LoggerBase } from "./LoggerBase";
import { LogLevel } from "./constants";
import { Context } from "./Context";
import { ILogger } from "./Logger";

type Record = {
  level: LogLevel;
  message: string;
  context: Context;
};
/**
 * Used for testing purposes.
 *
 * It records all records and gives you access to them for verification.
 */
export class TestLogger extends LoggerBase implements ILogger {
  public records: Record[] = [];

  public async log(
    level: LogLevel,
    message: string,
    context: Context = new Context()
  ): Promise<void> {
    this.records.push({ level, message, context });
  }

  public hasRecords(level: LogLevel): boolean {
    return this.records.find((record) => record.level === level) != undefined;
  }

  public reset(): void {
    this.records = [];
  }

  public hasRecord(record: Record): boolean {
    return this.hasRecordThatPasses(
      (haystack) =>
        haystack.message === record.message &&
        haystack.context.equals(record.context),
      record.level
    );
  }

  public hasRecordThatContains(message: string, level: LogLevel): boolean {
    return this.hasRecordThatPasses(
      (record) => record.message.includes(message),
      level
    );
  }

  public hasRecordThatMatches(regex: RegExp, level: LogLevel): boolean {
    return this.hasRecordThatPasses(
      (record) => regex.test(record.message),
      level
    );
  }

  public hasRecordThatPasses(
    predicate: (record: Record) => boolean,
    level: LogLevel
  ): boolean {
    if (!this.hasRecords(level)) {
      return false;
    }
    return this.records.find(predicate) != undefined;
  }
}
