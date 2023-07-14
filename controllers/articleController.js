const {Article} = require('../models/models')

class articleController { 
    async getOne(req, res) {
        const {id} = req.params
        console.log(req.params)
        const article = await Article.findOne({where: {id}})
        return res.json(article)
    }

    async getAll(req, res) {
        const articles = await Article.findAll({})
        return res.json(articles)
    }

    async create(req, res) {
        const {title, content} = req.body
        console.log(req.body)
        return res.json({title, content})
    } 

}

module.exports = new articleController()