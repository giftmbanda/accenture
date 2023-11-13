# pull a base image
FROM node:12.14.1-alpine3.9

# USER root

# declaring a WORKDIR means files will be automaticaly pushed to ./app
# make a new directory
RUN mkdir -p /usr/src/app

# assign the created directory as a workdir
WORKDIR /usr/src/app

# copy the ‘package.json’ and ‘package-lock.json’ file into working directory
COPY package*.json ./

# run the ‘npm cache clean’ command
RUN npm cache verify

# Install node_modules
RUN npm install

# copy the current directory . in the project to the workdir . in the image
COPY ./ ./

RUN npm run build

# expose port 80
EXPOSE 80

CMD ["npm", "start"]