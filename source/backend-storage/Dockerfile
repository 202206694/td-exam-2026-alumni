FROM node:20-alpine

WORKDIR /app

COPY source/backend-storage/package.json ./
RUN npm install

COPY source/backend-storage/backend-storage.js ./

# Persistent storage folder
RUN mkdir -p /data

EXPOSE 3000

CMD ["node", "backend-storage.js"]