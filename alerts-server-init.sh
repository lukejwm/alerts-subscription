#!/usr/bin/bash

set -e

# Small script to initialise EC2 instance as web server for Alerts Service

# Do updates
sudo apt update && sudo apt upgrade

echo "INSTALLING UTILS..."
sudo apt install -y git curl wget

echo "INSTALLING NGINX SERVER..."
sudo apt install nginx

echo "INSTALLING PYTHON 3.10..."
sudo apt install software-properties-common -y
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
sudo apt install python3.10 -y
echo "TESTING PYTHON INSTALLATION..."
/usr/bin/python3.10 --version
echo "CREATING SYMLINK FOR PYTHON..."
sudo ln -s /usr/bin/python3.10 /usr/bin/python
echo "TESTING SYMLINK..."
/usr/bin/python --version
echo "INSTALLING PYTHON TOOLS..."
sudo apt install -y python3-pip python3.10-venv libpq-dev python3-dev
