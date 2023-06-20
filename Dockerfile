FROM node:18-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install nodemon -g

COPY . .

EXPOSE 4000

CMD ["nodemon", "/dist/index.js"]
