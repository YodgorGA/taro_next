FROM node:alpine

WORKDIR /usr/src/app

RUN npm install

RUN npm run build

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
