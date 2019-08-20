var mysql = require("mysql");

var connection; 
if (process.env.JAWSDB_URL) {    

connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
    hostname: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
});
};

//This section creates the connection and the console.log indicating it's connected 
connection.connect(function(err){
    if(err){
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);

});
connection.connect();
module.exports = connection;