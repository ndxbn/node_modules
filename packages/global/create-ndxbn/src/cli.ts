#!/usr/bin/env node
import * as path from "path";
import * as childProcess from "child_process";
import Application from "./";

const cwd = process.cwd();
const app = new Application(process.cwd());

// initial repository
/// create .github/ directory // GitHub specific
app.mkdir(".github");
/// create .gitignore
app.template(".gitignore", {});
/// create .travis.yml
app.template(".travis.yml", {});
/// create .editorconfig
app.template(".editorconfig", {});
/// create renovate.json
app.template("renovate.json", {});
/// create .commitlintrc.yml
app.template(".commitlintrc.yml", {});

// create package.json
app.template("package.json", { name: path.basename(cwd) });
/// install dependencies
/// nothing
/// install devDependencies
childProcess.execSync(
  "npm install -D " +
    [
      "@commitlint/cli",
      "@commitlint/config-conventional",
      "@ndxbn/preset-jest",
      "@ndxbn/preset-typescript",
      "@types/node",
      "@types/jest",
      "husky",
      "jest",
      "npm-run-all",
      "prettier",
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

// install prettier
app.template(".prettierignore", {});
