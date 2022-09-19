const express = require('express');
var cors = require('cors') 
const keepAlive = require("./keepAlive.js");
// for methods other than GET!!!

var bodyParser = require('body-parser');

const app = express();
const game = require('./dbStuff.js');
app.use(cors()); // for methods other than GET!!!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', game);

app.listen(8000, () => {
  console.log('Server Awake');
});
