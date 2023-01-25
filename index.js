const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 5001;
const path = require('path');

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

app.get('/data',  function(req, res){
    varb.printTable(res);
 });
 
 app.post('/send', function(req, res){
   console.log("Received create")
   request = [req.body];
   varb.createRecord(request);
 
 });
 
 app.delete('/delete', function(req,res){
   console.log("Received delete");
   varb.deleteRow(req.body.getremoved);
 });
 
 app.put('/update',function(req,res){
   console.log("Received update");
   varb.updateTable(req.body.oldData,req.body.newData,req.body.record);
   res.send(true);
 
 });