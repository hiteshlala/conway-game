# Conway's Game of Life

> A zero player game exploring the evolution of cellular states based on surrounding cells.

> Deployed Version: [conway.hiteshlala.info](http://conway.hiteshlala.info)

The game was devised by John Horton Conway in 1970.  Read more on [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)


## To setup

Make sure you have Node, NPM, ng-cli, and SQLite installed

Build frontend:

    $ npm install
    $ npm run build

Build backend:

    $ npm install
    $ npm run start

Navigate to http://localhost:3000



## Issues npm installing

had to run to fix npm hanging or being killed:
```
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo swapon --show
sudo cp /etc/fstab /etc/fstab.bak
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
sudo sysctl vm.swappiness=10
echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf
sudo sysctl vm.vfs_cache_pressure=50
echo 'vm.vfs_cache_pressure=50' | sudo tee -a /etc/sysctl.conf
```
https://medium.com/@efrizalnf/fixing-err-killed-reify-fsevents-sill-reify-mark-deleted-when-npm-install-in-vps-c580f0c247a8


