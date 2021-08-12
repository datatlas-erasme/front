FROM node:latest AS dev
COPY . /src
WORKDIR /src/src
RUN ls
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 3000
