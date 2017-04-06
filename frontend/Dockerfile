FROM node:7.7.1
MAINTAINER Jan Filipowski <jachuf@gmail.com>

EXPOSE 8080

WORKDIR /home/app

COPY src/home_budget /home/app/src/home_budget

RUN npm install && npm build

CMD ["npm", "run", "dev-server"]
