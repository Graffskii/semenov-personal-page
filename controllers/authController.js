const path = require('path')
const admin = require('../dict/admin.json')
const jwt = require('jsonwebtoken')
const secret = require('../config.js')

const auth = (req, res) => {
    const {username, password} = req.body

    console.log(req.body)
    console.log(req.query)

    if(username !== admin.username | password !== admin.password) {
        return res.status(400).json({message:'Неправильно введены данные'})
    }

    const token = jwt.sign({}, secret, {expiresIn: '1m'} )

    res.cookie('jwt', token, {httpOnly: true, maxAge: 60000})

    res.json({token})
}

const loginPage = (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'static', 'html', "login.html"), {lastModified: false})
}

module.exports = {
    loginPage,
    auth
}