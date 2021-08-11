FROM node:latest AS dev
COPY . /src
WORKDIR /src/src
RUN ls
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 3000

RUN npm run build


FROM nginx:1.19.0
#copies React to the container directory
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from builder stage
COPY --from=dev /src/src/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]