//DB
const mysql = require('mysql')
require('../config/database');




//Get index page
exports.index = (req,res) => {
    let sql = "SELECT * FROM Persons";
    let query = connection.query(sql, (err,persons) => {
        if(err) throw err;
        res.render('index.ejs',{
            title: 'Homepage',
            persons: persons
        });

    });
}


