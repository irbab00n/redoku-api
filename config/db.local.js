const path = require('path');

/* CLIENT */
const _CLIENT = 'pg';

/* CONNECTION */
const _LOCAL_CONNECTION = {
  host: process.env.LOCAL_DB_HOST,
  user: process.env.LOCAL_DB_USER,
  password: process.env.LOCAL_DB_PASSWORD,
  database: 'redoku_development',
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
const _LOCAL_CONFIG = {
  client: _CLIENT,
  connection: _LOCAL_CONNECTION,
  migrations: _MIGRATIONS,
  seeds: _SEEDS
};

module.exports = _LOCAL_CONFIG;