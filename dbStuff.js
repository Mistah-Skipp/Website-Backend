var exp = require('express');
var router = exp.Router();

const { database } = require('./Database.js');
const varb = new database()

module.exports = router;
//varb.dropTable();
//varb.createTable();
//varb.wipe();


router.get('/',  function(req, res){
    res.redirect('/html/index.html');
   });

router.get('/data',  function(req, res){
   varb.printTable(res);
});

router.post('/send', function(req, res){
  console.log("Received create")
  request = [req.body];
  varb.createRecord(request);

});

router.delete('/delete', function(req,res){
  console.log("Received delete");
  varb.deleteRow(req.body.getremoved);
});

router.put('/update',function(req,res){
  console.log("Received update");
  varb.updateTable(req.body.oldData,req.body.newData,req.body.record);
  res.send(true);

});


//change requests go here, actual editing code goes in databse.js
