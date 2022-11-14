#!/bin/bash
#set -e

echo "Writing env var into file "
#echo $REACT_APP_BACKEND_URL
echo "REACT_APP_BACKEND_URL=localhost:3000" > .env 


exec "$@"