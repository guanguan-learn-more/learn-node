#!/bin/bash

# request.sh
for((i=1;i<=10000;i++)); do   
  curl http://127.0.0.1:3002/
  echo ""
done 