const mysql = require('mysql')


const connection = mysql.createConnection(process.env.DATABASE_URL);
  
connection.connect(function(err) {
  if(err) {
    console.log(err);
  } 
  else {
    console.log('Database connected')
  }

});

module.exports = connection;