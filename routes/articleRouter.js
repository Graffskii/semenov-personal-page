const Router = require('express');
const router = new Router()
const articleController = require('../controllers/articleController')


router.get('/', articleController.getAll)
router.get('/:id', articleController.getOne)
router.post('/post', articleController.create)
router.post('/update', articleController.update)
router.post('/delete', articleController.delete)


module.exports = router