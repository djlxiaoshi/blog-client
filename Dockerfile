FROM node:12.16.2-alpine3.9 AS builder
WORKDIR /app/blog-client
COPY package*.json ./
RUN npm install --registry=https://registry.npm.taobao.org


FROM node:12.16.2-alpine3.9
WORKDIR /app/blog-client
COPY --from=builder /app/blog-client/node_modules ./node_modules
COPY . .
RUN npm run build

RUN npm install -g pm2

EXPOSE 80

CMD pm2 start npm -- run start

