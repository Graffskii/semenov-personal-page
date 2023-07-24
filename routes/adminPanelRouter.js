const Router = require('express');
const router = new Router()
const get = require('../controllers/adminPanelController')
const authMiddleware = require('../middleware/authMiddleware')


router.get('/', authMiddleware, get)
// authMiddleware,

module.exports = router