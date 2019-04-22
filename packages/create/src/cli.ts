#!/usr/bin/env node
import * as path from "path";
import * as childProcess from "child_process";
import Application from "./";

const cwd = process.cwd();
const app = new Application(process.cwd());

// create package.json
app.template("package.json", { name: path.basename(cwd) });
/// install dependencies
/// nothing
/// install devDependencies
childProcess.execSync(
  "npm install -D " +
    [
      "@ndxbn/preset-typescript",
      "@ndxbn/preset-jest",
      "@types/jest",
      "@types/node",
      "jest",
      "npm-run-all",
      "ts-jest",
      "typescript"
    ].join(" ")
);

// install typescript
// create tsconfig.json
app.template("tsconfig.json", {});
// create "src/" directory
app.mkdir("src");
// create "src/{index.ts, cli.ts}
app.touch("src/index.ts");
app.touch("src/cli.ts");
