const jwt = require('jsonwebtoken')
const secret = require('../config.js')

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt

    if (!token) {
        // return res.status(401).json({message: 'нет токена'})
        return res.redirect(401, '/api/auth/login-page')
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Неправильный токен'})
        }

        next()
    })
}

module.exports = verifyToken