#!/bin/bash
set -e

echo "Writing env var into file "
echo $REACT_APP_BACKEND_URL
echo "REACT_APP_BACKEND_URL='"$REACT_APP_BACKEND_URL"'" > .env 


exec "$@"