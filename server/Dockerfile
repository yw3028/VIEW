FROM node:latest

RUN npm i -g nodemon

RUN mkdir /home/node/server

WORKDIR  /home/node/server

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .