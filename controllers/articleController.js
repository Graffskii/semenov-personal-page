const {Article} = require('../models/models')

class articleController { 
    async getOne(req, res) {
        const {id, lang} = req.query
        console.log(req.query)
        if (lang == "ru") {
            const article = await Article.findOne(
                {
                    attributes: {
                        exclude: ['title_en', 'content_en']
                    },
                    where: {id} 
                })
                return res.json(article)
        } else {
            const article = await Article.findOne(
                {
                    attributes: {
                        exclude: ['title_ru', 'content_ru']
                    },
                    where: {id}
                })
                return res.json(article)
        }
        
    }

    async getAll(req, res) {
        const {lang} = req.query
        console.log(req.query)
        if (lang == "ru") {
            const articles = await Article.findAll(
                {
                    attributes: {
                        exclude: ['title_en', 'content_en']
                    }
                })
                return res.json(articles)
        } else {
            const articles = await Article.findAll(
                {
                    attributes: {
                        exclude: ['title_ru', 'content_ru']
                    }
                })
                return res.json(articles)
        }
        
    }

    async create(req, res) {
        const {title, content} = req.body
        console.log(req.body)
        return res.json({title, content})
    } 

}

module.exports = new articleController()