FROM node:22-alpine

RUN apk add --no-cache python3 py3-pip make g++ \
    && ln -sf python3 /usr/bin/python \
    && ln -sf pip3 /usr/bin/pip

WORKDIR /app
COPY . /app
CMD ["SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm_config_arch=x64 npm_config_platform=linux yarn add sharp"]
ENTRYPOINT ["yarn"]
