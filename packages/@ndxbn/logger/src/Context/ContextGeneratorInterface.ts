export default interface ContextGeneratorInterface {
  /**
   * context name
   */
  readonly name: string;
  generate(): import("./types").Context;
}
