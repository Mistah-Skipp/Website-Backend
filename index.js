
const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router()
const port = 5001;
const path = require('path');
const { database } = require('./Database.js');
const db = new database()
const cors = require("cors");
//db.createTable();
app.use(cors());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({extended:true,})
)
app.listen(port, ()=>{console.log("server running on port "+port)})
app.use(express.static(path.join(__dirname,"public")));
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/data',  function(req, res){
    db.printTable(res);
    console.log("data here");
 });
 
 app.post('/send', function(req, res){
   console.log("Received create")
   request = [req.body];
   db.createRecord(request);
 
 });
 
 app.delete('/delete', function(req,res){
   console.log("Received delete");
   db.deleteRow(req.body.getremoved);
 });
 
 app.put('/update',function(req,res){
   console.log("Received update");
   db.updateTable(req.body.oldData,req.body.newData,req.body.record);
   res.send(true);
 
 });