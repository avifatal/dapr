FROM node:18
WORKDIR /usr/src/app
COPY package.json ./
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN pnpm install
COPY . .
CMD ['node' 'dist/main.js']


