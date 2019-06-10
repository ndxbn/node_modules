import { Context } from "../Context";
import { FormatterInterface, RawFormatter } from "./Formatter";
import HandlerInterface from "./HandlerInterface";
import Interpolator from "./Interpolator";

/**
 * output with `console.log()`
 */
export default class ConsoleLogHandler implements HandlerInterface {
  protected readonly formatter: FormatterInterface = new RawFormatter();

  protected static get contextBase(): Context {
    return new Map([["datetime", new Date().toISOString()]]);
  }

  public async log(message: string, context: Context): Promise<void> {
    // merge
    const contextExtended: Context = new Map([
      ...ConsoleLogHandler.contextBase,
      ...context
    ]);

    const logMessage = Interpolator.interpolate(message, contextExtended);
    console.log(logMessage);

    return;
  }
}
