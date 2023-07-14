const Router = require('express');
const router = new Router()
const articleRouter = require('./articleRouter')
const mailerRouter = require('./mailerRouter')

router.use('/article', articleRouter)
router.use('/send-mail', mailerRouter)

module.exports = router