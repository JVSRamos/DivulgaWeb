# syntax=docker/dockerfile:1

FROM node:16
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY /src .

CMD ["node", "index.ts"]
