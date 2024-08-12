const config = require('../config/config.json');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || config.development.database,
    process.env.MYSQL_USER || config.development.username,
    process.env.MYSQL_PASSWORD || config.development.password,
    {
        host: process.env.MYSQL_HOST || config.development.host,
        port: process.env.MYSQL_PORT || config.development.port,
        dialect: config.development.dialect,
        operatorAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

module.exports = sequelize.authenticate().then((db) => {
    console.log('MySQL Conectado');

    return db;
});
