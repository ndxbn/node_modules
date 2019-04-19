Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"

  config.vm.provider "virtualbox" do |vb|
    vb.cpus = 4
    vb.memory = 4096
  end

  # vagrant plugin configuration
  ## agrant-vbguest
  config.vbguest.no_install = true

  ## Cache
  ### Redis
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 6379, guest: 6379
  ## DataBases
  ### MySqL
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 3306, guest: 3306
  ### Postgres
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 5432, guest: 5432
  ### MongoDB
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 27017, guest: 27017
  ### Apache CouchDB
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 5984, guest: 5984
  ### Neo4j
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 7474, guest: 7474
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 7687, guest: 7687
  ## Message Queue / Job Queue
  ### RabbitMQ
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 5672, guest: 5672
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 5671, guest: 5671
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 25672, guest: 25672
  ## Search Engine
  ### Elasticsearch
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 9200, guest: 9200
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 9300, guest: 9300
  ## Hadoop
  ### Apache Zookeeper
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 2181, guest: 2181
  ### mature
  ### MailHog
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 1025, guest: 1025
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 8025, guest: 8025
  ### Web Service
  ### MinIO
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 9000, guest: 9000
  ### PlantUML Server
  config.vm.network "forwarded_port", host_ip: "127.0.0.1",
                    host: 18000, guest: 18000

  # provision
  config.vm.synced_folder "./vagrant", "/vagrant"
  ## pre-install
  config.vm.provision :shell, inline: "yum -y update"
  ## install docker
  config.vm.provision :shell, path: "https://get.docker.com"
  config.vm.provision :shell, inline: "systemctl start docker && systemctl enable docker"
  ## install docker-compose
  config.vm.provision :shell, inline: <<-SHELL
  sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" \
    -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
  SHELL

  # deploy docker-compose.yml and start middleware
  config.vm.provision :file, source: "./docker-compose.yml", destination: "/home/vagrant/docker-compose.yml"
  config.vm.provision :shell, inline: "/usr/local/bin/docker-compose up -d"
end
