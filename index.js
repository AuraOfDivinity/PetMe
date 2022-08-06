const express = require('express');
const db = require('./database/instance.js')
const bodyParser = require('body-parser')
const upload = require('./middlewares/fileUploadMiddleware')

const app = express();

app.use(bodyParser.json());
// Express modules / packages

app.use(bodyParser.urlencoded({ extended: true }));
// Express modules / packages

app.get('/', (req, res) => {
  res.send('Pet Me Backend running successfully!')
});

require('./routes/index.js')(app)

app.listen(3001, () => {
    db.sequelize.authenticate().then(() => {
    console.log('DB Connection has been established successfully.');
    }).catch((error) => {
      console.error('Unable to connect to the database: ', error);
    });
  db.sequelize.sync()
    .then(() => {
      console.log("Synced db.");
    })
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });
    console.log('server started');
});
