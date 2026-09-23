#!/bin/bash
# Hook: ValidateService - health check with retries (10 x 3 seconds)
for i in $(seq 1 10); do
  if curl -sf http://localhost:3000/health | grep -q '"status":"UP"'; then
    echo "Health check passed on attempt $i"
    exit 0
  fi
  echo "Attempt $i: app not ready yet, retrying in 3s ..."
  sleep 3
done
echo "Health check FAILED after 10 attempts"
exit 1
