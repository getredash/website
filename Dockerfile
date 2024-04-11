FROM node:20-alpine

WORKDIR /app
COPY . /app
ENTRYPOINT ["yarn"]
