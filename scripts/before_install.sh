#!/bin/bash
# Hook: BeforeInstall - make sure Node.js is present and target folder exists
set -e
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js not found - installing ..."
  dnf install -y nodejs
fi
echo "Node.js version: $(node --version)"
mkdir -p /opt/avox-web-app
