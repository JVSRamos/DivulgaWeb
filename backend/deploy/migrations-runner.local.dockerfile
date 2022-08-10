FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -D

COPY . .

RUN npm run build

WORKDIR /app/src/databases

ENTRYPOINT ["node", "migrate", "up"]