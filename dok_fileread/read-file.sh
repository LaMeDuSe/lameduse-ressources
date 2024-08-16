#!/bin/bash
while true; do
  if [ -f /tmp/random_file ]; then
    echo "Reading from random_file:"
    cat /tmp/random_file
  else
    echo "random_file does not exist yet."
  fi
  sleep 2
done
