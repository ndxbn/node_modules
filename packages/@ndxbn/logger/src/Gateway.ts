import { LogLevel } from "./constants";
import { HandlerInterface } from "./Handler";
import { Context } from "./Context";

export default class Gateway {
  public readonly handlers: HandlerInterface[] = [];
  public readonly handlingLoLevels: Set<LogLevel>;

  constructor() {
    this.handlingLoLevels = new Set<LogLevel>(Gateway.getLogLevels().keys());
  }

  public async log(
    logLevel: LogLevel,
    message: string,
    context: Context
  ): Promise<void[]> {
    if (!this.isHandling(logLevel)) {
      return [];
    }

    return Promise.all(
      this.handlers.map(handler => handler.log(message, context))
    );
  }

  protected isHandling(logLevel: LogLevel): boolean {
    return this.handlingLoLevels.has(logLevel);
  }

  protected static getLogLevels(): Map<LogLevel, number> {
    return new Map([
      ["emergency", 600],
      ["alert", 550],
      ["critical", 600],
      ["error", 400],
      ["warning", 300],
      ["notice", 250],
      ["info", 200],
      ["debug", 100]
    ]);
  }
}
