var mysql = require("mysql");
connection = mysql.createConnection((
    hostname: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"

));

//This section creates the connection and the console.log indicating it's connected 
connection.connect(function(err){
    if(err){
        console.err("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);

});

module.exports = connection;