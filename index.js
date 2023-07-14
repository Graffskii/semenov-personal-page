
const express = require('express');
const app = express();
const port = 5000;

const sequelize = require('./db.js')

const models = require('./models/models.js')

const cors = require('cors')

const router = require('./routes/index.js')


app.use(cors())
app.use(express.json())

app.use('/api', router)

const start = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log('Подключение к базе данных установлено.');
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
    } catch (error) {
      console.error('Ошибка подключения к базе данных:', error);
    }
  };
 

 
start()