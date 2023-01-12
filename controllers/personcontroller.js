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

exports.getAddPage = (req,res) => {
    res.render('addperson.ejs',{
        title: 'Add'
    });
}

exports.add = (req,res) => {
    let data = { lastname: req.body.lastname, firstname: req.body.firstname, address: req.body.address, city: req.body.city }
    let sql = "INSERT INTO Persons SET ?";
    let query = connection.query(sql, data,(err,persons) => {
        if(err) throw err;
        res.redirect('/');
    });

}


exports.getEditPage = (req,res) => {
    const id = req.params.id;
    let sql = `SELECT * FROM Persons WHERE id = ${id}`;
    let query = connection.query(sql,(err, person) => {
        if(err) throw err;
        res.render('editperson.ejs',{
            title: 'Edit',
            person: person[0]
        })
    })
}

exports.edit = (req,res) => {
    let data = { lastname: req.body.lastname, firstname: req.body.firstname, address: req.body.address, city: req.body.city }
    const id = req.body.id;
    let sql = "UPDATE Persons SET lastname = '"+req.body.lastname+"', firstname = '"+req.body.firstname+"', address = '"+req.body.address+"', city = '"+req.body.city+"' WHERE id ='"+req.body.id+"'";
    let query = connection.query(sql,(err,persons) => {
        if(err) throw err;
        res.redirect('/');
    });
}

exports.delete = (req,res) => {
    const id = req.params.id;
    let sql = `DELETE FROM Persons WHERE id = ${id}`;
    let query = connection.query(sql,(err,person) => {
        if(err) throw err;
        res.redirect('/');
    })
}