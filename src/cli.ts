#!/usr/bin/env node
import Util from "./";

const util = new Util(process.cwd());

// initial repository
/// create .github/ directory // GitHub specific
util.mkdir(".github");
/// create .gitignore
/// create .travis.yml
/// create .editorconfig
/// create renovate.json

// create package.json
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
