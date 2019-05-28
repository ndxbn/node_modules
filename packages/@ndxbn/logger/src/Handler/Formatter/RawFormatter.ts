import FormatterInterface from "./FormatterInterface";

export default class RawFormatter implements FormatterInterface{
  public format(message: string): string {
    return message;
  }
}
