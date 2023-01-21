const express = require('express');
var cors = require('cors') 
// for methods other than GET!!!

var bodyParser = require('body-parser');

const app = express();
const port = 5001;
app.listen(port);
const game = require('./dbStuff.js');
app.use(cors()); // for methods other than GET!!!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.game;
