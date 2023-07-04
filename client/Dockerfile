FROM node:lts-slim

RUN mkdir -p /usr/src/app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN rm -rf node_modules

RUN npm cache clean --force

RUN npm i

EXPOSE 5173

CMD [ "npm", "run", "dev" ]