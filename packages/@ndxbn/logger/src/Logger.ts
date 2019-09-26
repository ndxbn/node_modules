import { LogLevel } from "./constants";
import { Gateway } from "./Gateway";
import { ConsoleLogHandler } from "./Handler";
import { LoggerBase } from "./LoggerBase";
import { IHandler } from "./Handler";
import { Context } from "./Context";

/**
 * Describes a logger instance.
 *
 * The message MUST be a string or object implementing toString().
 *
 * The message MAY contain placeholders in the form: {foo} where foo
 * will be replaced by the context data in key "foo".
 *
 * The context array can contain arbitrary data. The only assumption that
 * can be made by implementors is that if an Exception instance is given
 * to produce a stack trace, it MUST be in a key named "exception".
 *
 */
export interface ILogger {
  /**
   * System is unusable.
   */
  emergency(message: string, context?: Context): Promise<void>;

  /**
   * Action must be taken immediately.
   *
   * Example: Entire website down, database unavailable, etc. This should
   * trigger the SMS alerts and wake you up.
   */
  alert(message: string, context?: Context): Promise<void>;

  /**
   * Critical conditions.
   *
   * Example: Application component unavailable, unexpected exception.
   */
  critical(message: string, context?: Context): Promise<void>;

  /**
   * Runtime errors that do not require immediate action but should typically
   * be logged and monitored.
   */
  error(message: string, context?: Context): Promise<void>;

  /**
   * Exceptional occurrences that are not errors.
   *
   * Example: Use of deprecated APIs, poor use of an API, undesirable things
   * that are not necessarily wrong.
   */
  warning(message: string, context?: Context): Promise<void>;

  /**
   * Normal but significant events.
   */
  notice(message: string, context?: Context): Promise<void>;

  /**
   * Interesting events.
   *
   * Example: User logs in, SQL logs.
   */
  info(message: string, context?: Context): Promise<void>;

  /**
   * Detailed debug information.
   */
  debug(message: string, context?: Context): Promise<void>;

  /**
   * Logs with an arbitrary level.
   */
  log(level: LogLevel, message: string, context?: Context): Promise<void>;
}

export class Logger extends LoggerBase implements ILogger {
  public static create() {
    return new Logger([new ConsoleLogHandler()]);
  }

  private readonly gateway: Gateway = new Gateway();
  private generalContext: Context;

  // factories
  public constructor(
    handlers: IHandler[] = [],
    generalContext: Context = new Context()
  ) {
    super();

    this.gateway.handlers.push(...handlers);

    this.generalContext = generalContext;
  }

  public async log(
    level: LogLevel,
    message: string,
    context: Context = new Context()
  ): Promise<void> {
    const contextExtended = new Context([...this.generalContext, ...context]);

    await this.gateway.log(level, message, contextExtended);
  }

  public addHandler(...handlers: IHandler[]): this {
    for (const handler of handlers) {
      this.gateway.handlers.push(handler);
    }

    return this;
  }

  /**
   * Contexts added this method, always pass to all handlers.
   */
  public addContext(context: Context): this {
    this.generalContext = new Context([...this.generalContext, ...context]);

    return this;
  }
}
