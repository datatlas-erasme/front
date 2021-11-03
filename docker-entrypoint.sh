#!/bin/bash
set -e

echo "Writing env var into file "
echo $REACT_APP_MAPBOX_TOKEN
echo "REACT_APP_MAPBOX_TOKEN='"$REACT_APP_MAPBOX_TOKEN"'" > .env 

exec "$@"