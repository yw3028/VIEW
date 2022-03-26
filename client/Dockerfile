FROM node:latest

USER node

RUN mkdir /home/node/client

WORKDIR /home/node/client

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .