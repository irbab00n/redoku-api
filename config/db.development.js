const path = require('path');

/* CLIENT */
const _CLIENT = 'pg';

/* CONNECTION */
const _DEVELOPMENT_CONNECTION = {
  host: 'ec2-23-21-244-254.compute-1.amazonaws.com',
  user: 'yerwahfdfbqsap',
  password: '042eaf593e4f7349fe05f7a8984be6b53958f679098f5df5d201ce3df4e987a5',
  database: 'd7bahs0emtdh2g',
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
const _DEVELOPMENT_CONFIG = {
  client: _CLIENT,
  connection: _DEVELOPMENT_CONNECTION,
  migrations: _MIGRATIONS,
  seeds: _SEEDS
};

module.exports = _DEVELOPMENT_CONFIG;