FROM node:10-alpine
RUN apk add --no-cache python

WORKDIR /app
COPY . /app
ENTRYPOINT ["yarn"]
