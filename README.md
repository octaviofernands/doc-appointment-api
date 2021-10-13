## First of all
It was a pleasure to learn a little bit of NestJS and decorators :)

## Installation
Developed with node v14.18.0, not tested with previous versions

You'll need to have [MongoDb](https://docs.mongodb.com/manual/installation/) pre installed in order to run this application.

```bash
$ npm install
```

## Configuring
You can find and change all configs available in `.env` file before running
```bash
PORT=3000
MONGODB_URL=mongodb://localhost:27017
DB_NAME=gyant2
JWT_KEY=supersecretkey
```

## Populating the data
add the data needed for the demo

```bash
$ npm run migrate:up
```

The first migrated user has the following credentials:

Username: joe.smith@email.com

Password: admin123


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Endpoints

- [Postman Collection](https://www.getpostman.com/collections/21270af7ef2f4cd0f7a5)

## ToDo (I had no time to finish)

- [] Unit tests
- [] e2e tests
- [] dockerization
- [] CI/CD