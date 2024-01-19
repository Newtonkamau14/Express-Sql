import mysql from "mysql";

// const connection = mysql.createConnection(process.env.DATABASE_URL!);
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password123#@!",
  database: "testcrud",
});

connection.connect(function (err: Error) {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});

export default connection;
