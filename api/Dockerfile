FROM node:lts-slim

RUN mkdir -p /usr/src/app

RUN npm install --global nodemon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 5000

COPY . .

# You can change this
CMD [ "npm", "run", "dev" ]