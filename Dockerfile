FROM node:8
# Container version
ARG VERSION=1.0.0
LABEL license=MIT \
      version=$VERSION

# Prepare application
ENV DB_HOST mongo
ENV DB_PORT 27017
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json /opt/app
RUN npm i npm@latest -g
RUN npm install -g @angular/cli
RUN npm install

ENV NODE_ENV dev
COPY . /opt/app
RUN cd client && npm i
RUN cd client && ng build --prod
EXPOSE 3000
CMD ["npm", "start"]