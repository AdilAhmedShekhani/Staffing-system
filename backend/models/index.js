const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('your_db_name', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { sequelize };
