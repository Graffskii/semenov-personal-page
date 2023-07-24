const Router = require('express');
const router = new Router()
const articleController = require('../controllers/articleController')
const authMiddleware = require('../middleware/authMiddleware')


router.get('/', articleController.getAll)
router.get('/:id', articleController.getOne)
router.post('/post', authMiddleware, articleController.create)
router.post('/update', authMiddleware, articleController.update)
router.post('/delete', authMiddleware, articleController.delete)


module.exports = router