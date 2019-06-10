import { Context } from "../Context";

export default interface HandlerInterface {
  log(message: string, context?: Context): Promise<void>;
}
