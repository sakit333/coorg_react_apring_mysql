#!/bin/bash

echo "install glibc"
rpm -q glibc
sudo yum update glibc

echo "glibc completed"
echo "install node....."
curl -sL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

echo "installation complete"

