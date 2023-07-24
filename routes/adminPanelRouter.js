const Router = require('express');
const router = new Router()
const get = require('../controllers/adminPanelController')


router.get('/', get)

module.exports = router