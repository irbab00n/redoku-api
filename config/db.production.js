const path = require('path');

/* CLIENT */
const _CLIENT = 'pg';

/* CONNECTION */
const _PRODUCTION_CONNECTION = {
  host: process.env.PROD_DB_HOST,
  user: process.env.PROD_DB_USER,
  password: process.env.PROD_DB_PASSWORD,
  database: process.env.PROD_DB_DATABASE,
  port: 5432,
};

/* MIGRATIONS */
const _MIGRATIONS_DIRECTORY = path.join(__dirname, '../migrations');
const _MIGRATIONS = {
  directory: _MIGRATIONS_DIRECTORY
};

/* SEEDS */
const _SEEDS_DIRECTORY = path.join(__dirname, '../seeds');
const _SEEDS = {
  directory: _SEEDS_DIRECTORY
};

/* CONFIGS */
const _PRODUCTION_CONFIG = {
  client: _CLIENT,
  connection: _PRODUCTION_CONNECTION,
  migrations: _MIGRATIONS,
  seeds: _SEEDS
};

module.exports = _PRODUCTION_CONFIG;