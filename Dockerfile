# latest official node image
FROM node:latest

MAINTAINER Caitlin Dauth <caitlin.dauth@gmail.com>

# use pm2 for running the server
RUN npm install pm2 -g

# use cached layer for node modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src && cp -a /tmp/node_modules /usr/src/

# add project files
WORKDIR /usr/src
ADD . /usr/src

ENV env release
EXPOSE 3000

CMD ["pm2-docker", "process.yml"]