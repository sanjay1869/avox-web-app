#!/bin/bash
# Hook: ApplicationStop - stop the running app (safe on first deployment)
if systemctl is-active --quiet avox-web-app; then
  echo "Stopping avox-web-app ..."
  systemctl stop avox-web-app
else
  echo "avox-web-app is not running - nothing to stop."
fi
exit 0
