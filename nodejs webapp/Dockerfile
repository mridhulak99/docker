
FROM node:alpine

WORKDIR /usr/app

copy ./package.json ./ 

RUN npm install 

COPY ./ ./

CMD ["npm","start"]
