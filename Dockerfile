FROM node:24-alpine

WORKDIR /app
COPY . /app
CMD ["SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm_config_arch=x64 npm_config_platform=linux yarn add sharp"]
ENTRYPOINT ["yarn"]
