const path = require('path');

/* CLIENT */
const _CLIENT = 'pg';

/* CONNECTION */
const _PRODUCTION_CONNECTION = {
  host: 'ec2-23-21-171-25.compute-1.amazonaws.com',
  user: 'jemiduzvslngsv',
  password: '6027f5d8900986c2857ed45acc13a75b74ec27b3685dcd9e78615c647dbe5562',
  database: 'dtcn2gkpbqs8o',
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