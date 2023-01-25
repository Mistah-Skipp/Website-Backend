const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 5001;
const db = require("./dbStuff.js");

app.db;
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({extended:true,})
)
app.listen(port, ()=>{console.log("server running on port "+port)})

app.get('/', (req,res) =>{
    res.redirect("/index.html");
})