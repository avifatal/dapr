FROM node:18 as build
WORKDIR /usr/src/app
COPY package.json ./
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

FROM node:18
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist /usr/src/app/
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
ENTRYPOINT ["node", "main.js"]
