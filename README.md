# ndxbn's main mono repository

## Requirements

- [Node.js LTS](https://nodejs.org/)
- [Docker](https://www.docker.com/)
  - or [Vagrant](https://vagrantup.com/docs/) + [Oracle VirtualBox](https://www.virtualbox.org/)

## Bootstrapping

```bash
git clone git@github.com:ndxbn/ndxbn.git
cd ndxbn
npm ci

git config commit.template .gitcommit.txt

pushd vagrant
docker-compose up
popd
# or use vagrant:
#vagrant plugin install vagrant-disksize vagrant-vbguest vagrant-docker-compose
#vagrant up
```

## Workflow

[GitHub Flow](https://guides.github.com/introduction/flow/)
