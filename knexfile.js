const _DEVELOPMENT_CONFIG = require('./config/db.development');
const _LOCAL_CONFIG = require('./config/db.local');
const _PRODUCTION_CONFIG = require('./config/db.production');

module.exports.development = _DEVELOPMENT_CONFIG;
module.exports.local = _LOCAL_CONFIG;
module.exports.production = _PRODUCTION_CONFIG;