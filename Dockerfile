FROM node:22-alpine

WORKDIR /app
COPY . /app
ENTRYPOINT ["yarn"]
