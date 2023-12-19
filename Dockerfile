FROM node:18

WORKDIR /usr/src/app

ENV OPENAI_API_KEY=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

COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
