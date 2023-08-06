const path = require('path')

const get = (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'static', 'html', "index.html"), {lastModified: false})
}

module.exports = get