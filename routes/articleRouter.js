const Router = require('express');
const router = new Router()
const articleController = require('../controllers/articleController')


router.get('/', articleController.getAll)
router.get('/:id', articleController.getOne)
router.post('/post', articleController.create)

module.exports = router