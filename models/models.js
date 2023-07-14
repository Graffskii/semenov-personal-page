const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Article = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    title: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}, //хранение изображений недоделано
    content: {type: DataTypes.STRING, allowNull: false},
    source: {type: DataTypes.STRING},
    date: {type: DataTypes.DATE}
})

module.exports = {
    Article
}