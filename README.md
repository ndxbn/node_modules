# ndxbn

[![Greenkeeper badge](https://badges.greenkeeper.io/ndxbn/ndxbn.svg)](https://greenkeeper.io/)

- My Node Packages Mono Repository
- My Small Repositories
- Questions & Answers on ISSUE

This Mono-Repository managements my small libraries.

「小さめのライブラリ」とかを管理しているモノレポ。

If you have some questions for me, you can use [ISSUE](https://github.com/ndxbn/ndxbn/issues/new?template=question.md).
Of course, you can [reply or send DM on Twitter](https://twitter.com/ndxbn), too.

@ndxbn に質問とかがしたければ、[ISSUE](https://github.com/ndxbn/ndxbn/issues/new?template=question.md) を使ってください。
もちろん、[Twitter でリプとか DM を送りつけても](https://twitter.com/ndxbn)良いです。

## Requirements

- [Node.js LTS](https://nodejs.org/)

## Workflow

![workflow activity](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/ndxbn/ndxbn/master/docs/work-flow.puml)


### Directory Structure

```
# WorkFlow Directories
├── /config
├── /scripts
├── /tests
├── /docs
# Packages
├── /packages
├── /packages__scoped
├── /dev-box
├── /misc
```

#### WorkFlow Directories 

`/config` is configuration files for workflow.

`/scripts` is TypeScript files used by `npm` scripts.
 
#### Packages Directories

`packages` is global scope Node Module Packages.

`packages__scoped` is `@ndxbn` scoped Node Module Packages.

`dev-box` is VirtualBox on Vagrant Development Box.

`misc` is My misc repositories.
I may split repository, but almost `git clone` them with `ndxbn/ndxbn` repo.
