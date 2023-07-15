// const {Article} = require('../models/models')
const dict = require('../dict/dict')

class articleController { 
    async getOne(req, res) {
        const {id} = req.params
        const {lang} = req.query
        console.log(req.params)

        if (lang == 'ru') {
            const item = dict.find(item => item.id == id)
            let itemRu = {}
            let keysEn = ['title_en', 'content_en']
            console.log(item)
            for (let key in item) {
                if (!keysEn.includes(key)) {
                    itemRu[key] = item[key]
                }
                console.log(itemRu)
            }
            return res.json(itemRu)
        } else if (lang == 'en') {
            const item = dict.find(item => item.id == id)
            let itemEn = {}
            let keysEn = ['title_ru', 'content_ru']
            console.log(item)
            for (let key in item) {
                if (!keysEn.includes(key)) {
                    itemEn[key] = item[key]
                }
                console.log(itemEn)
            }
            return res.json(itemEn)
        }
        
    }

    async getAll(req, res) {
        const {lang} = req.query
        console.log(req.query)

        if (lang == 'ru') {
            let keysEn = ['title_en', 'content_en']
            const dictRu = dict.map(function(item) { 
                let itemRu = {}
                console.log(item)
                for (let key in item) {
                    if (!keysEn.includes(key)) {
                        itemRu[key] = item[key]
                    }
                    console.log(itemRu)
                }
                return itemRu
            })
            console.log(dictRu)

            const articles = dictRu
            
            return res.json(articles)
        } else if (lang == 'en') {
            let keysRu = ['title_ru', 'content_ru']
            const dictEn = dict.map(function(item) { 
                let itemEn = {}
                for (let key in item) {
                    if (!keysRu.includes(key)) {
                        itemEn[key] = item[key]
                    }
                }
                return itemEn
            })
            console.log(dictEn)

            const articles = dictEn
            
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