# ndxbn's main mono repository

## Requirements

- [Node.js LTS](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Bootstrapping

```bash
git clone git@github.com:ndxbn/ndxbn.git
cd ndxbn
npm ci

git config commit.template .gitcommit.txt

docker-compose up -f vagrant/docker-compose.yml
```

## Workflow

[GitHub Flow](https://guides.github.com/introduction/flow/)
