import { AbstractLogger } from "../";
import { LogLevel, Context } from "../constants";
import * as assert from "assert";

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
export default class TestLogger extends AbstractLogger {
  public records: Record[] = [];

  public async log(
    level: LogLevel,
    message: string,
    context: Context = {}
  ): Promise<void> {
    this.records.push({ level, message, context });
  }

  public hasRecords(level: LogLevel): boolean {
    return this.records.find(record => record.level === level) != undefined;
  }

  public hasRecord(record: Record): boolean {
    return (
      this.records.find(haystack => {
        // "level" and "message" is primitive, but "context" is object.
        if (
          haystack.level === record.level &&
          haystack.message === record.message
        ) {
          try {
            assert.deepStrictEqual(haystack.context, record.context);
            return true;
          } catch (e) {
            return false;
          }
        }
        return false;
      }) != undefined
    );
  }

  public hasRecordThatContains(message: string, level: LogLevel): boolean {
    return (
      this.records.find(
        record => record.level === level && record.message.includes(message)
      ) != undefined
    );
  }

  public hasRecordThatMatches(regex: RegExp, level: LogLevel): boolean {
    return (
      this.records.find(
        record => record.level === level && regex.test(record.message)
      ) != undefined
    );
  }

  public reset(): void {
    this.records = [];
  }
}
