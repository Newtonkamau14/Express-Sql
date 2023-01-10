//DB
require('../config/database');
const connection = require('../config/database');





//Get index page
exports.index = (req,res) => {
    let sql = "SELECT * FROM Persons";
    let query = connection.query(sql, (err,persons) => {
        if(err) throw err;
        res.render('index.ejs',{
            title: 'Home',
            persons: persons
        });

    });
}

exports.add = (req,res) => {
    res.render('addperson.ejs',{
        title: 'Add'
    })
}


