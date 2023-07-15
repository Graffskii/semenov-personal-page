const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'personal-page',
    'developer_user',
    '1234',
    {
        host: 'localhost',
        dialect: 'postgres'
    })

module.exports = sequelize