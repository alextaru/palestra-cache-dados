const Sequelize = require('sequelize');
const dbConfig = require('./database');

const connection = new Sequelize(dbConfig['development']);

module.exports = { connection, Sequelize };
