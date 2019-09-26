import { ILogger } from "./Logger";
import { NullLogger } from "./NullLogger";

type constructor<T extends {}> = {
  new (...args: any[]): T;
};

interface LoggerAwareInterface {
  logger: ILogger;
}

export function Loggable<T extends constructor<{}>>(
  target: T
): T & constructor<LoggerAwareInterface> {
  return class NewTarget extends target implements LoggerAwareInterface {
    public logger: ILogger = new NullLogger();
  };
}
