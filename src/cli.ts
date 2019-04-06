#!/usr/bin/env node
import * as path from "path";
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

// create package.json
app.template("package.json", {name: path.basename(cwd)});
/// scripts

// install typescript
// create tsconfig.json
// create "src/" directory
// create "src/{index.ts, cli.ts, server.ts}

// install jest
// create jest.config.js

// install prettier
// create .prettierignore

// install eslint
