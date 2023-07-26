FROM node:18.14.1-alpine AS node

WORKDIR /app

COPY ./app/package*.json /app/

RUN npm install

COPY ./app /app

CMD ["npm", "start"]