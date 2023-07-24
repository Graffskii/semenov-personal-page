// const {Article} = require('../models/models')
const dict = require('../dict/dict')
const path = require('path')
const uuid = require('uuid')
const fs = require('fs')

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
        } else {
            const item = dict.find(item => item.id == id)
            return res.json(item)
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
        }  else {
            return res.json(dict)
        }
        
        
    }

    async create(req, res) {
        const {title_ru, content_ru, title_en, content_en, source, date} = req.body
        const {img} = req.files // добавлять картинку обязательно

        const dbPath = path.resolve(__dirname, '..', 'dict', 'dict.json')
        console.log(dbPath)
        let data = fs.readFileSync(dbPath, "utf-8")
        const articles = JSON.parse(data)

        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', 'img', fileName))

        

        const max = dict.reduce((prev, current) => {
            return (prev.id > current.id) ? prev : current;
        });

        let id = max.id + 1

        const article = {
            id,
            title_ru: title_ru || " " ,
            content_ru: content_ru || " ",
            title_en: title_en || " " ,
            content_en: content_en || " ",
            img: fileName, 
            source, 
            date
        }

        articles.push(article)
        data = JSON.stringify(articles, null, 2)
        fs.writeFileSync(dbPath, data)

        console.log(req.body)
        return res.json(dict)
    } 

    async update(req, res) {
        const {id, title_ru, content_ru, title_en, content_en, source, date} = req.body
        const {img} = req.files // добавлять картинку обязательно
        const idInt = Number(id)

        console.log(img)


        const dbPath = path.resolve(__dirname, '..', 'dict', 'dict.json')
        console.log(dbPath)
        let data = fs.readFileSync(dbPath, "utf-8")
        const articles = JSON.parse(data)

        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', 'img', fileName))

        articles.pop()

        const article = {
            id: idInt,
            title_ru: title_ru || " " ,
            content_ru: content_ru || " ",
            title_en: title_en || " " ,
            content_en: content_en || " ",
            img: fileName, 
            source, 
            date
        }

        articles.push(article)
        data = JSON.stringify(articles, null, 2)
        fs.writeFileSync(dbPath, data)

        console.log(req.body)
        return res.json(dict)
    }

    async delete(req, res) {
        const {id} = req.body

        const dbPath = path.resolve(__dirname, '..', 'dict', 'dict.json')
        console.log(dbPath)
        let data = fs.readFileSync(dbPath, "utf-8")
        const articles = JSON.parse(data)

        const articlesUpt = articles.filter(item => item.id !== Number(id))

        data = JSON.stringify(articlesUpt, null, 2)
        fs.writeFileSync(dbPath, data)

        console.log(req.body)
        return res.json(dict)
    }

}

module.exports = new articleController()