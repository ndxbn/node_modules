import { IFormatter } from "./Formatter";

/**
 * Return message as is formatter
 */
export class RawFormatter implements IFormatter {
  public format(message: string): string {
    return message;
  }
}
