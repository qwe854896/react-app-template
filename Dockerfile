# specify base image as build
FROM node:lts-alpine as build

# set working directory
RUN mkdir -p /app
WORKDIR /app

# install dependencies by yarn
COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

# build
RUN yarn build


# specify base image as production
FROM node:lts-alpine as production

RUN mkdir -p /app/dist
WORKDIR /app

COPY --from=build /app/dist dist

RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]

