const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 5001;
const db = require("./dbStuff.js");
const path = require('path');

app.db;
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({extended:true,})
)
app.listen(port, ()=>{console.log("server running on port "+port)})
app.use(express.static(path.join(__dirname,"public")));
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
    console.log(__dirname);
});