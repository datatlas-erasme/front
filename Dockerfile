FROM node:lts as prod

COPY . /src
WORKDIR /src/src
RUN ls
WORKDIR /src/src
RUN yarn install
RUN yarn add @deck.gl/geo-layers

WORKDIR /src/src
CMD [ "npm", "start" ]
EXPOSE 3000
