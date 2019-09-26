import { Context } from "../Context";

export interface IHandler {
  log(message: string, context?: Context): Promise<void>;
}
