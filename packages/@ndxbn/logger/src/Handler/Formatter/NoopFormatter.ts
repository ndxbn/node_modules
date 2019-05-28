import FormatterInterface from "./FormatterInterface";

/**
 * always return empty string formatter.
 */
export default class NoopFormatter implements FormatterInterface {
  public format(message: string): string {
    return "";
  }

}
