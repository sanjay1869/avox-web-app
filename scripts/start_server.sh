#!/bin/bash
# Hook: ApplicationStart - (re)start the app
set -e
systemctl restart avox-web-app
echo "avox-web-app started."
