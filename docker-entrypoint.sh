#!/bin/bash
set -e

echo "REACT_APP_MAPBOX_TOKEN='"$REACT_APP_MAPBOX_TOKEN"'" > .env 

exec "$@"