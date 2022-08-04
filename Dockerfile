FROM node:lts as prod
ARG REACT_APP_BACKEND_URL
COPY src /app/src
COPY public /app/public
COPY package.json /app
COPY package-lock.json /app
COPY .prettierrc /app
COPY tsconfig.json /app
#COPY . /app
WORKDIR /app
RUN ls
RUN npm install --legacy-peer-deps

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
RUN sh /docker-entrypoint.sh

RUN npm run build

FROM nginx:1.19.0
#copies React to the container directory
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from builder stage
COPY --from=prod /app/build .

EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
