FROM node:10-alpine

WORKDIR /app
COPY . /app
ENTRYPOINT ["yarn"]
