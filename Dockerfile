FROM node:lts AS dev
COPY . /src
WORKDIR /src/src
RUN ls
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 3000
