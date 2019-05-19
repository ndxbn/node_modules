import { Context, LogLevel } from "./constants";
import LoggerInterface from "./LoggerInterface";

/**
 * This is a simple Logger implementation that other Loggers can inherit from.
 *
 * It simply delegates all log-level-specific methods to the `log` method to
 * reduce boilerplate code that a simple Logger that does the same thing with
 * messages regardless of the error level has to implement.
 */
export default abstract class AbstractLogger implements LoggerInterface {
  /**
   * @inheritDoc
   */
  abstract log(level: LogLevel, message: string, context?: Context): Promise<void>;

  /**
   * @inheritDoc
   */
  public emergency(message: string, context?: Context): Promise<void> {
    return this.log("emergency", message, context);
  }

  /**
   * @inheritDoc
   */
  public alert(message: string, context?: Context): Promise<void> {
    return this.log("alert", message, context);
  }

  /**
   * @inheritDoc
   */
  public critical(message: string, context?: Context): Promise<void> {
    return this.log("critical", message, context);
  }

  /**
   * @inheritDoc
   */
  public error(message: string, context?: Context): Promise<void> {
    return this.log("error", message, context);
  }

  /**
   * @inheritDoc
   */
  public warning(message: string, context?: Context): Promise<void> {
    return this.log("warning", message, context);
  }

  /**
   * @inheritDoc
   */
  public notice(message: string, context?: Context): Promise<void> {
    return this.log("notice", message, context);
  }

  /**
   * @inheritDoc
   */
  public info(message: string, context?: Context): Promise<void> {
    return this.log("info", message, context);
  }

  /**
   * @inheritDoc
   */
  public debug(message: string, context?: Context): Promise<void> {
    return this.log("debug", message, context);
  }
}
