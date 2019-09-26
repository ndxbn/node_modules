import { Context } from "../Context";
import { IHandler } from "./Handler";

type Record = {
  message: string;
  context: Context;
};

/**
 * Used for testing purposes.
 *
 * It records all records and gives you access to them for verification.
 */
export class TestHandler implements IHandler {
  public records: Record[] = [];

  public async log(
    message: string,
    context: Context = new Context()
  ): Promise<void> {
    this.records.push({ message, context });
  }

  public hasRecords(): boolean {
    return this.records.length !== 0;
  }

  public reset(): void {
    this.records = [];
  }

  public hasRecord(record: Record): boolean {
    return this.hasRecordThatPasses(
      haystack =>
        haystack.message === record.message &&
        haystack.context.equals(record.context)
    );
  }

  public hasRecordThatContains(message: string): boolean {
    return this.hasRecordThatPasses(record => record.message.includes(message));
  }

  public hasRecordThatMatches(regex: RegExp): boolean {
    return this.hasRecordThatPasses(record => regex.test(record.message));
  }

  public hasRecordThatPasses(predicate: (record: Record) => boolean): boolean {
    return this.records.find(predicate) != undefined;
  }
}
