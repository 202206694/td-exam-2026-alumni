FROM node:20-alpine

WORKDIR /app

COPY source/api-gw/package.json ./
RUN npm install

COPY source/api-gw/api-gw.js ./

EXPOSE 3000

CMD ["node", "api-gw.js"]