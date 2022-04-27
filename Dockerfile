FROM node:18.0.0

WORKDIR /app

COPY ["package.json", "yarn.lock", "gatsby-config.js", "./"]

RUN yarn install \
    && yarn cache clean

CMD ["yarn", "develop", "-H", "0.0.0.0", "-p", "8000"]
