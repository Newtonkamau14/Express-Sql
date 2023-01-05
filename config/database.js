const mysql = require('mysql')


const con = mysql.createConnection({
    host: "localhost",
    user: "newton",
    password: "password"
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE testcrud", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
});