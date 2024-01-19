//DB
import { Request,Response } from "express";
import connection from "../config/database";
// require("../config/database");
// const connection = require("../config/database");

//Get index page
const index = (req:Request, res:Response) => {
  let sql = "SELECT * FROM Persons";
  let query = connection.query(sql, (err:Error, persons) => {
    if (err) throw err;

    //Pagination
    const resultsPerPage = 20;
    const numOfPersons = persons.length;
    const numOfPages = Math.ceil(numOfPersons / resultsPerPage);
    let page = req.query.page ? Number(req.query.page) : 1;

    res.render("index.ejs", {
      title: "Home",
      persons: persons,
    });
  });
};

const getAddPage = (req:Request, res:Response) => {
  res.render("addperson.ejs", {
    title: "Add",
  });
};

const add = (req:Request, res:Response) => {
  let data = {
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    address: req.body.address,
    city: req.body.city,
  };
  let sql = "INSERT INTO Persons SET ?";
  let query = connection.query(sql, data, (err) => {
    if (err) throw err;
    res.redirect("/");
  });
};

const getEditPage = (req:Request, res:Response) => {
  const id = req.params.id;
  let sql = `SELECT * FROM Persons WHERE id = ${id}`;
  let query = connection.query(sql, (err:Error, person) => {
    if (err) throw err;
    res.render("editperson.ejs", {
      title: "Edit",
      person: person[0],
    });
  });
};

const edit = (req:Request, res:Response) => {
  let data = {
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    address: req.body.address,
    city: req.body.city,
  };
  const id = req.body.id;
  let sql =
    "UPDATE Persons SET lastname = '" +
    req.body.lastname +
    "', firstname = '" +
    req.body.firstname +
    "', address = '" +
    req.body.address +
    "', city = '" +
    req.body.city +
    "' WHERE id ='" +
    req.body.id +
    "'";
  let query = connection.query(sql, (err:Error, persons) => {
    if (err) throw err;
    res.redirect("/");
  });
};

const deletePerson = (req:Request, res:Response) => {
  const id = req.params.id;
  let sql = `DELETE FROM Persons WHERE id = ${id}`;
  let query = connection.query(sql, (err:Error, person) => {
    if (err) throw err;
    res.redirect("/");
  });
};

const search = (req:Request, res:Response) => {
  const search = req.query.search;
  let sql = `SELECT * FROM Persons WHERE lastname LIKE '%${search}%' OR firstname LIKE '%${search}%'`;
  let query = connection.query(sql, (err:Error, persons) => {
    if (err) throw err;

    res.render("index.ejs", {
      title: "Home",
      persons: persons,
    });
  });
};

export default {
  index,
  getAddPage,
  add,
  getEditPage,
  edit,
  deletePerson,
  search,
};
