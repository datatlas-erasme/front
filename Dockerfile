# TODO Remove the dirty fix (git clone thing) - 

FROM node:lts as prod
ARG REACT_APP_BACKEND_URL

COPY . /src
WORKDIR /src/src
RUN ls

WORKDIR /src/src

RUN yarn install
RUN yarn add @deck.gl/geo-layers



COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
RUN sh /docker-entrypoint.sh

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
