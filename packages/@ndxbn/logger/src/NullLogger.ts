import AbstractLogger from "./AbstractLogger";


/**
 * This Logger can be used to avoid conditional log calls.
 *
 * Logging should always be optional, and if no logger is provided to your
 * library creating a NullLogger instance to have something to throw logs at
 * is a good way to avoid littering your code with `if ($this->logger) { }`
 * blocks.
 */
export default class NullLogger extends AbstractLogger {

  /**
   * @inheritDoc
   */
  public async log() {
    // noop
    return ;
  }
}
