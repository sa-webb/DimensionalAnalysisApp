const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const article = require('./server/article.route');

let dev_db_url = 'mongodb://austin:capstone3@ds341825.mlab.com:41825/articles';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
const config = {
    autoIndex: false,
    useNewUrlParser: true,
  };

mongoose.connect(mongoDB, config);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/articles', article);

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});