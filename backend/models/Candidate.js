const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    skills: DataTypes.TEXT,
    experience: DataTypes.INTEGER
});

module.exports = Candidate;
