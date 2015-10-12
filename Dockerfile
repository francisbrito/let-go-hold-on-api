FROM iojs:2.5.0

MAINTAINER Francis Brito <fr.br94@gmail.com>

EXPOSE 3000

RUN mkdir /var/app

WORKDIR /var/app

ADD . /var/app

RUN npm install

CMD npm start
