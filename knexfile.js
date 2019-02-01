const path = require('path');

/* CLIENT */
const _CLIENT = 'pg';

/* CONNECTION */
const _DEVELOPMENT_CONNECTION = {
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'redoku_development',
  port: 5432,
};

/* MIGRATIONS */
const _MIGRATIONS_DIRECTORY = path.join(__dirname, './migrations');
const _MIGRATIONS = {
  directory: _MIGRATIONS_DIRECTORY
};

/* SEEDS */
const _SEEDS_DIRECTORY = path.join(__dirname, './seeds');
const _SEEDS = {
  directory: _SEEDS_DIRECTORY
};

/* CONFIGS */
const _DEVELOPMENT_CONFIG = {
  client: _CLIENT,
  connection: _DEVELOPMENT_CONNECTION,
  migrations: _MIGRATIONS,
  seeds: _SEEDS
};

module.exports.development = _DEVELOPMENT_CONFIG;