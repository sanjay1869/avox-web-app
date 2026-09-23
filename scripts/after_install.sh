#!/bin/bash
# Hook: AfterInstall - register the app as a systemd service
set -e
cp /opt/avox-web-app/avox-web-app.service /etc/systemd/system/avox-web-app.service
chown -R ec2-user:ec2-user /opt/avox-web-app
systemctl daemon-reload
systemctl enable avox-web-app
