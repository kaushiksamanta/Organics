FROM node:12.5.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm config set unsafe-perm true && \
    npm i -g @angular/cli && \
    npm i -g node-sass

COPY . .

RUN npm ci

EXPOSE 4200

CMD ["npm", "start"]