echo "removing old images"
rm -rf ./debian_12
rm -rf ./debian_11
###########
echo "cloning debian 12 latest"
mkdir ./debian_12
cd ./debian_12
wget -r -np -nH --cut-dirs=9 -R "index.html*" https://deb.debian.org/debian/dists/bookworm/main/installer-amd64/current/images/netboot/debian-installer/amd64/
cd ..
###########
echo "cloning debian 11 latest"
mkdir ./debian_11
cd ./debian_11
wget -r -np -nH --cut-dirs=9 -R "index.html*" https://deb.debian.org/debian/dists/bookworm/main/installer-amd64/current/images/netboot/debian-installer/amd64/
cd ..
###########
echo "done"
