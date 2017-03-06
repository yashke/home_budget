FROM node:7.7.1
MAINTAINER Jan Filipowski <jachuf@gmail.com>

EXPOSE 8080

WORKDIR /home/app

COPY . /home/app

RUN npm install && npm build

CMD ["npm", "run", "dev-server"]
