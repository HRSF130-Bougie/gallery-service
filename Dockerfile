FROM node:14.9.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 8080

CMD [ "npm", "start"]