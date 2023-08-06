
const express = require('express');
const app = express();
const port = 5000;

// const sequelize = require('./db.js')

const models = require('./models/models.js')

const cors = require('cors')

const router = require('./routes/index.js')

const path = require('path')

const fileupload = require('express-fileupload')

const cookieParser = require('cookie-parser')


app.use(cors())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())

app.use(cookieParser())
app.use(fileupload())

app.use('/articles', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'html', "articles.html"))
})

app.use('/check-project', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'html', "check-project.html"))
})

app.use('/main', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'html', "main.html"))
})

app.use('/project', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'html', "project.html"))
})

app.use('/read-article', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'html', "read-article.html"))
})

app.use('/api', router)

const start = async () => {
    try {
      // await sequelize.authenticate();
      // await sequelize.sync();
      // console.log('Подключение к базе данных установлено.');
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
    } catch (error) {
      console.error('Ошибка подключения к базе данных:', error);
    }
  };
 

 
start()