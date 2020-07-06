var mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "Tushar",
  password: "12345",
  database: "student",
});

mysqlConnection.connect((err) => {
  if (!err) console.log("DB connection succeded.");
  else
    console.log(
      "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
});

app.listen(7000, () =>
  console.log("Express server is running at port no : 3000")
);

//select all
app.get("/std", (req,res) => {
  console.log(req.params);
  mysqlConnection.query("SELECT * FROM friends", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
   }
  );
});

//select according to id
app.get("/std/:id", (req, res) => {
  console.log(req.params);
  mysqlConnection.query("SELECT * FROM friends WHERE  id=?",[req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//delete
app.delete("/std/:id", (req, res) => {
  console.log(req.params);
  mysqlConnection.query(
    "DELETE  FROM  friends WHERE id=?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Deleted Successfully");
      else console.log(err);
    }
  );
});

// // insert
// var sql =
//   "INSERT INTO friends (id, name, hobby, mob) VALUES ('6', 'Vinod', 'nothing', '565659')";
// mysqlConnection.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("1 record inserted");
// });

//update
var sql = "UPDATE friends SET name = 'devangg' WHERE name = 'Vinod'";
mysqlConnection.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result.affectedRows + " record(s) updated");
});



