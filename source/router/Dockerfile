FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY source/router/package.json ./
RUN npm install

COPY source/router/router.js ./

# Create persistent data folder
RUN mkdir -p /data

EXPOSE 3000

CMD ["node", "router.js"]