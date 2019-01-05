import * as path from "path";

export default class Main {
  private readonly cwd: string = process.cwd();

  public constructor(cwd: string) {
    this.cwd = path.resolve(cwd);
  }

  public async execute() {
    // pre task
    const originalCurrentWorkingDirectory = process.cwd();
    // configure npm
    // `npm init`
    // add fields to package.json
    // create .npmrc
    // configure Git
    // configure Jest
    // configure tsc
    // configure TSLLint
    // create src directory
    // todo add each filed into package.json
    // index.ts
    // server.ts
    // cli.ts

    // post task
    process.chdir(originalCurrentWorkingDirectory);
  }
}
