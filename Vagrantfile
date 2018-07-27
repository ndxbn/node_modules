Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.hostname = "ndxbn.local"
  config.vm.network :private_network,
                    ip: "192.168.56.17"

  config.vm.provider "virtualbox" do |v|
    v.cpus = 2
    v.memory = 8192
  end

  # provision
  config.vm.synced_folder "./provision", "/vagrant",
                          id: "provision",
                          mount_options: %w(dmode=775 fmode=664)
  # directory root is `/vagrant`
  config.vm.provision :ansible_local,
                      playbook: "site.yml",
                      inventory_path: "local",
                      limit: "all",
                      galaxy_role_file: "requirements.yml",
                      galaxy_roles_path: "galaxy_roles"

  # packages
  # some files should have executable permission.
  # e.g. "node_modules/.bin/*" "/vendor/bin/*"
  config.vm.synced_folder "./packages", "/home/ubuntu/packages",
                          id: "packages",
                          mount_options: %w(dmode=775 fmode=775)

  # dotfiles
  config.vm.synced_folder "./synced_folder/dotfiles", "/home/ubuntu/dotfiles",
                          id: "packages",
                          mount_options: %w(dmode=775 fmode=644)

end
