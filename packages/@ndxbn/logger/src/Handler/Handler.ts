import { Context } from "../Context";

export interface HandlerInterface {
  log(message: string, context?: Context): Promise<void>;
}
