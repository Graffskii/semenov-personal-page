const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Article = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    title_ru: {type: DataTypes.STRING, allowNull: false},
    content_ru: {type: DataTypes.STRING, allowNull: false},
    title_en: {type: DataTypes.STRING},
    content_en: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false}, //хранение изображений недоделано
    source: {type: DataTypes.STRING},
    date: {type: DataTypes.DATE}
})

module.exports = {
    Article
}