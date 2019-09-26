import { Context } from "../Context";
import { IFormatter, RawFormatter } from "./Formatter";
import { IHandler } from "./Handler";
import { Interpolator } from "./Interpolator";

/**
 * output with `console.log()`
 */
export class ConsoleLogHandler implements IHandler {
  protected readonly formatter: IFormatter = new RawFormatter();

  protected static get contextBase(): Context {
    return new Context([["datetime", () => new Date().toISOString()]]);
  }

  public async log(message: string, context: Context): Promise<void> {
    // merge
    const contextExtended: Context = new Context([
      ...ConsoleLogHandler.contextBase,
      ...context
    ]);

    const logMessage = Interpolator.interpolate(message, contextExtended);
    console.log(logMessage);

    return;
  }
}
