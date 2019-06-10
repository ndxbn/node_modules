import { Context } from "../Context";

export default class Interpolator {
  /**
   * Placeholder names MUST be delimited with a single opening brace { and a single closing brace }.
   * There MUST NOT be any whitespace between the delimiters and the placeholder name.
   *
   * key names SHOULD be composed only of the characters `A-Z`, `a-z`, `0-9`, underscore `_`, and period `.` .
   *   Implementors MAY use placeholders to implement various escaping strategies and translate logs for display.
   *
   * Users SHOULD NOT pre-escape placeholder values since they can not know in which context the data will be displayed.
   */
  public static interpolate(message: string, context: Context): string {
    let newMessage: string = message;

    for (const [key, value] of context) {
      newMessage = this.replaceAll(newMessage, `{${key}}`, value);
    }

    return newMessage;
  }

  private static replaceAll(
    message: string,
    replaceWhat: string,
    replaceTo: string
  ): string {
    // escape RegExp special chars
    const replaceWhatEscaped = replaceWhat.replace(
      /[-\/\\^$*+?.()|[\]{}]/g,
      "\\$&"
    );

    return message.replace(new RegExp(replaceWhatEscaped, "g"), replaceTo);
  }
}
