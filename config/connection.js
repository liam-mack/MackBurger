const mysql = require("mysql");
const util = require("util");
require (`dotenv`).config()

// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Basilio0",
//     database: "burgers_db"
// });

// connection.connect((err) => {
//     if (err) throw err;
//     console.log("Connected as id " + connection.threadId);
// });

dbConnect = () => {
  let connection;
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log("JAWSDB")
  } else {
    connection = mysql.createConnection({
      host: "localhost",
      port: "3306",
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: "burgers_db",
    });
    // }
    // Eliminates Node.js callbacks in ORM by promisifying sql query function
    return {
      query(db, input) {
        return util.promisify(connection.query).call(connection, db, input);
      },
    };
  }
};

module.exports = dbConnect();
