FROM iojs:2.5.0

MAINTAINER Francis Brito <fr.br94@gmail.com>

RUN mkdir /var/app

ADD package.json /var/app/package.json

WORKDIR /var/app

RUN npm install

ADD . /var/app

CMD npm start
