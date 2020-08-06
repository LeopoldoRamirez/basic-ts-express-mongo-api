## Basic API Usin Node, Expres, TypeScript and MongoDB

## create project
# $ npm init -y

## add project dependencies
## express: 
## mongoose:
## dotenv
# $ npm i express mongoose

## add development dependencies
## nodemon: 
## typescript:
## @types/node:
## @types/express:
## @types/mongoose:
## @types/dotenv:
## tsc-watch:
# $ npm i nodemon typescript @types/node @types/express @types/mongoose  -D

## configure typescript configuration file
# $ npx tsc --init

## Basic tsconfig settings
## "target": "es6"
## "outDir": "./dist"
## "rootDir": "./src"

## Define task in on script section on  package.json file
## "build": Compile the code 
## "buildrun": Execute build and then run the transpile index.js
## "dev" : with nodemon, listen every change in ts files and then run buildrun

## to run the define task use
## $ npm run build
## $ npm run buildrun
## $ npm run dev

## Prepare MongoDB 
## For this project, the db is created with docker

## Option1: Create a docker volume and append to docker mongo container

## Create Docker Volume
# $ docker volume create mongo-volume

## Create the docker mongo container and add the docker volume
# $ docker run -d --name dbmongo -p 27017:27017 --mount src=mongo-volume,dst=/data/db  mongo


## Option2: Create a docker mongo container and add an external volume
# $ docker run -d --name dbmongo -p 27017:27017 -v ${PWD}/mongo-data:/data/db  mongo

## Check the database, enter in conteiner , iterative mode to use bash
# $ docker exec -it dbmongo bash

# we enter in container in root mode, execute mongo command
# root@[ID_GENERATED_BY_DOCER]:/# mongo

# in the prompt of mongo check the databases
# > show dbs;

## To stop the database
# $ docker stop dbmongo

## To star the database
# $ docker start dbmongo

## To restart the database
## $ docker restart dbmongo

## to see and follow the logs
# $ docker logs dbmongo -f

## to force to remove all container (BE CAREFUL)
# $ docker rm -f $(docker ps -aq)


## build image
# $ docker build -t ts-mongo-api .

## run our image
# $ docker run -d --name api02 -p 8085:3000 --env-file development/env_file  ts-mongo-api   

## the content of env_file

APPLICATION_PORT=[APPLICATION_PORT]

MONGODB_HOST=[HOST_IP_DATABASE]

MONGODB_DEFAULT=[MONGO_DATABASE]
