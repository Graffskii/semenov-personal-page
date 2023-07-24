const Router = require('express');
const router = new Router()
const { auth, loginPage } = require('../controllers/authController')


router.post('/', auth)
router.get('/login-page', loginPage)


module.exports = router