FROM node:lts as prod
ARG REACT_APP_BACKEND_URL

COPY src /index/src
COPY public /index/public
COPY package.json /index
COPY package-lock.json /index
COPY .prettierrc /index
COPY .prettierignore /index
COPY tsconfig.json /index
COPY config-overrides.js /index

WORKDIR /index

RUN ls
RUN npm ci --legacy-peer-deps

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
RUN sh /docker-entrypoint.sh

RUN npm run build

FROM nginx:1.19.0
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from builder stage
COPY --from=prod /app/build .

EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
