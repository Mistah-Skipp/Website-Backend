var exp = require('express');
var router = exp.Router();

const { database } = require('./Database.js');
const varb = new database()

module.exports = router;
//varb.dropTable();
varb.createTable();
console.log("table made");
//varb.wipe();


router.get('/',  function(req, res){
    res.redirect('/index.html');
   });




//change requests go here, actual editing code goes in databse.js
