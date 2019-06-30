FROM node:alpine
RUN apk update && apk add --no-cache make git

WORKDIR /app

