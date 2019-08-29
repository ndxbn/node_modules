Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"

  config.vm.provider "virtualbox" do |vb|
    vb.cpus = 2
    vb.memory = 4096
  end

  # vagrant plugin configuration
  ## vagrant-vbguest
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


  # provisions
  config.vm.synced_folder "./vagrant", "/vagrant",
                          id: "provision",
                          type: "nfs",
                          mount_options: %w(dmode=775 fmode=664)

  config.vm.provision :docker
  config.vm.provision :docker_compose, compose_version: "1.24.1",
                      yml: "/vagrant/docker-compose.yml",
                      run: "always"
end
