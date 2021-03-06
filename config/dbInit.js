const Sequelize = require('sequelize');
const config = require('./dbConfig')
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

module.exports = sequelize