import { LogLevel } from "./constants";
import Gateway from "./Gateway";
import { ConsoleLogHandler } from "./Handler";
import LoggerBase from "./LoggerBase";
import LoggerInterface from "./LoggerInterface";
import { HandlerInterface } from "./Handler";
import { Context } from "./Context";

export default class Logger extends LoggerBase implements LoggerInterface {
  public static create() {
    return new Logger([new ConsoleLogHandler()]);
  }

  private readonly gateway: Gateway = new Gateway();
  private generalContext: Context;

  // factories
  public constructor(
    handlers: HandlerInterface[] = [],
    generalContext: Context = new Map()
  ) {
    super();

    this.gateway.handlers.push(...handlers);

    this.generalContext = generalContext;
  }

  public async log(
    level: LogLevel,
    message: string,
    context: Context = new Map()
  ): Promise<void> {
    const contextExtended = new Map([...this.generalContext, ...context]);

    await this.gateway.log(level, message, contextExtended);
  }

  public addHandler(...handlers: HandlerInterface[]): this {
    for (const handler of handlers) {
      this.gateway.handlers.push(handler);
    }

    return this;
  }

  /**
   * Contexts added this method, always pass to all handlers.
   */
  public addContext(context: Context): this {
    this.generalContext = new Map([...this.generalContext, ...context]);

    return this;
  }
}
