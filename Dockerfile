# Docker Config, Refer to issue: https://github.com/vercel/next.js/issues/121
# build image
# FROM node:12-alpine as build
# ENV NODE_ENV production


# A Hack to initiate install and build in same container without using the multi-container strategy
# COPY . /usr/app
# WORKDIR /usr/app

# ADD package.json .


# COPY . /src
# WORKDIR /src


# Employing the layer caching strategy
# RUN npm install
# RUN npm run build
# RUN npm prune --production

# FROM node:12-alpine

# WORKDIR /usr/app
# ENV NODE_ENV production


# COPY --from=build /src/node_modules /usr/app/node_modules
# COPY --from=build /src/package.json /usr/app/package.json
# COPY --from=build /src/.next /usr/app/.next
# COPY --from=build /src/public /usr/app/public



# EXPOSE 3500
# CMD ["npm", "start"]


# VERSION ONE DOCKER CONFIG
FROM node:12-alpine as build

COPY . /src
WORKDIR /src

RUN npm install
RUN npm run build
RUN npm prune --production

FROM node:12-alpine

WORKDIR /usr/app

COPY --from=build /src/node_modules /usr/app/node_modules
COPY --from=build /src/package.json /usr/app/package.json
COPY --from=build /src/public /usr/app/public
COPY --from=build /src/.next /usr/app/.next

ENV NODE_ENV production

CMD ["npm", "start"]
