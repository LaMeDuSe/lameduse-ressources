#!/bin/bash
while true; do
  echo "Writing date and time to random_file:"
  date > /tmp/random_file
  echo "Contents of random_file:"
  cat /tmp/random_file
  sleep 2
done
