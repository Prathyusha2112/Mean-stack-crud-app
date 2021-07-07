const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var compController = require('./controllers/compController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(4000, () => console.log('server started at port 4000 yayyy'));

app.use('/compensations', compController);