import FormatterInterface from "./FormatterInterface";

export default class NoopFormatter implements FormatterInterface{
  public format(message: string): string {
    return message;
  }
}
