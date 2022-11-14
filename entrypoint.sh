# Escape / with \/ for sed ex http://localhost:3000 -> http:\/\/localhost:3000
REACT_APP_BACKEND_URL=$(echo $REACT_APP_BACKEND_URL | sed 's/\//\\\//g')

# find in static/js and replace the string localhost:3000 with REACT_APP_BACKEND_URL
sed -i "s/localhost:3000/$REACT_APP_BACKEND_URL/g" static/js/*.js
nginx -g 'daemon off;'