FROM node:21-alpine

WORKDIR /app
COPY . /app
ENTRYPOINT ["yarn"]
