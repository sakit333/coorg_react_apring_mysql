#!/bin/bash

echo "install glibc for node..."
sudo apt-get install -y libc6-dev

echo "Building React frontend..."
node --version
npm --version

npm i
npm install
npm run build

