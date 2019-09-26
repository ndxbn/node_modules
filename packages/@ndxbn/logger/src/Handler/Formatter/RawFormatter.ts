import { FormatterInterface } from "./FormatterInterface";

/**
 * Return message as is formatter
 */
export class RawFormatter implements FormatterInterface {
  public format(message: string): string {
    return message;
  }
}
