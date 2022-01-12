# TODO Remove the dirty fix (git clone thing) - 

FROM node:lts as prod
ARG REACT_APP_BACKEND_URL

COPY . /src
WORKDIR /src/src
RUN ls
# DIRTY FIX
RUN git clone https://github.com/datatlas-erasme/kepler.gl.git
WORKDIR  /src/src/kepler.gl
RUN git checkout add-multiple-value-column
WORKDIR /src/src

# TODO : do not mix yarn and npm packages
#RUN npm install --force

RUN yarn install
RUN yarn add @deck.gl/geo-layers


RUN rm -r  /src/src/node_modules/kepler.gl/*
RUN cp -r /src/src/kepler.gl/dist/*  /src/src/node_modules/kepler.gl/


#RUN --mount=type=secret,id=REACT_APP_MAPBOX_TOKEN \
#    export REACT_APP_MAPBOX_TOKEN=$(cat /run/secrets/REACT_APP_MAPBOX_TOKEN)

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
RUN sh /docker-entrypoint.sh
#ENTRYPOINT ["/docker-entrypoint.sh"]

WORKDIR /src/src



RUN npm run build

FROM nginx:1.19.0
#copies React to the container directory
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from builder stage
COPY --from=prod /src/src/build .

EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
