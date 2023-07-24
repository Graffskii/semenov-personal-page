const Router = require('express');
const router = new Router()
const articleRouter = require('./articleRouter')
const mailerRouter = require('./mailerRouter')
const adminPanelRouter = require('./adminPanelRouter')

router.use('/article', articleRouter)
router.use('/send-mail', mailerRouter)
router.use('/admin', adminPanelRouter)

module.exports = router