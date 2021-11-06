class database{
   constructor(){
      const sqlite3 = require('sqlite3').verbose();
      this.type = "mv";
      this.db = new sqlite3.Database('db', (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected!');
    });  
  }
  dropTable(){
    var drop = `DROP TABLE backlog`
     this.db.run(drop, (err) =>{
      if(err){
        return console.log(err.message);
      }
      console.log("Table DROPPED")
    });
  }

  createTable(){
    var makeTable = `CREATE TABLE backlog(
                     ID INTEGER PRIMARY KEY AUTOINCREMENT,
                     title TEXT,
                     status TEXT,
                     platform TEXT,
                     plan TEXT,
                     notes TEXT
                     );`;
    this.db.run(makeTable, (err) =>{
      if(err){
        return console.log(err.message);
      }
      console.log("Table created")
    });
  }

  createRecord(record){
    console.log("Adding Entry: "+record)
    var insert = `INSERT INTO backlog(title,status,platform,plan,notes)
    VALUES(?,?,?,?,?)`;
    console.log(record[0])
    for(var i = 0; i < record.length; i++){

    var values = [record[i].title, record[i].status,record[i].platform,record[i].plan, record[i].notes];
    this.db.run(insert,values,(err) =>{
      if(err){
        return console.log(err.message);
      }
      console.log("Record added"+this)
    })
    }
  }
  
  printTable(res){
    var print = "SELECT * FROM backlog ";
    var table = []
     this.db.all(print,(err,rows) =>{
      if(err){
        return console.log(err.message);
      }
     
      rows.forEach((row) => {
        table.push(row);
      })
      res.send(table);
    })
     
  }

  updateTable(old,entry,record){
    var update = `UPDATE backlog SET `+record+` = \"`+entry+`\"WHERE id = \"`+old+`\"`
    
    console.log(update)
    this.db.all(update,(err) =>{
      console.log(update)
      if(err){
        console.log(err.message)
      }
      console.log("Table updated")
    })
  }

  deleteRow(id){
    var destroy = `DELETE FROM backlog 
                  WHERE id = \"`+id+`\"`
    
    this.db.all(destroy,(err) =>{
      console.log(update)
      if(err){
        console.log(err.message)
      }
      console.log("Row destroyed")
    })
  }

  searchDB(name,res){
    var search = `SELECT * FROM backlog
                  WHERE title LIKE \"%`+name+`%\"`
    var table = [];
    console.log(search);
    this.db.all(search,(err,rows) =>{
      if(err){
        console.log(err.message);
      }
      rows.forEach((row) =>{
        table.push(row)
      })
      res.send(table)
    })
  }
}

module.exports = {database};