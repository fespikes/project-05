FROM 172.16.1.99/frontend/tdc-ui/build/ci-base-8.11
ARG APP_DIR="/usr/src/app"

COPY package.json .npmrc $APP_DIR/

# npm 5 uses different userid when installing packages, as workaround su to node when installing
# see https://github.com/npm/npm/issues/16766
RUN set -xe \
    && (cd "/$APP_DIR"; npm i) \
    && (npm cache clean --force)

WORKDIR $APP_DIR
