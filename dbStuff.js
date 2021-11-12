var exp = require('express');
var router = exp.Router();

const { database } = require('./Database.js');
const varb = new database()
module.exports = router;
//varb.dropTable();
//varb.createTable();
//varb.wipe();


router.get('/',  function(req, res){
   res.send("U cant C me")
   });
router.get('/data',  function(req, res){
   varb.printTable(res)
});

router.post('/send', function(req, res){
  console.log("Received create")
  request = [req.body];
  varb.createRecord(request)

});

router.delete('/delete', function(req,res){
  console.log("Received delete")
  res.send(varb.deleteRow(req.body.getremoved))
});

router.put('/updateData',function(req,res){
  console.log("Reciveved update");
  varb.updateTable(req.body.oldData,req.body.newData,req.body.record);

});

//change requests go here, actual editing code goes in databse.js
