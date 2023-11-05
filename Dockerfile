FROM node:18-alpine

WORKDIR /app
COPY . /app
ENTRYPOINT ["yarn"]
