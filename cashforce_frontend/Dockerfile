FROM node:16-alpine

RUN apk update && apk add bash

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173