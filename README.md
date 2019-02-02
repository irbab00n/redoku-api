# Redoku API

This is a React Redux based sudoku game back-end API.

## How to run the service:

Before running the service, all dependencies must be downloaded first.

After cloning down the repository, run the following command:

```
npm install
```


### Running the service:

```
npm start
```

### To ensure the database works:

First:

Make sure that you create a database on your postgres

```
psql -H postgres

CREATE DATABASE redoku_development

```

Second:

If you want to build the schema into the database, run the migration command:

```
knex migrate:latest
```

Third (optional):

If you want to seed the database with a couple test cases, run this command

```
knex seed:run
```

If you need to rollback the database to drop the tables, run this command:

```
knex migrate:rollback
```

---------------------------------------
On heroku:
Connect to postgres:
`heroku pg:psql --app APP_NAME`

push data from a local database into a remote Heroku Postgres database
`heroku pg:push thesis_devel DATABASE_URL --app APP_NAME`

----------------------------------------