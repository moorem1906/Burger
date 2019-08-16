var connection = require("../config/connection.js");
var orm = {
    selectAll: function(table, cd){
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function(err, res){
            if(err) {
                thow err;
            }
            cd(res);

        });
    }
    //This section will create the insert function
    insertOne:function(table, cols, val, cd){
        var dbQuery = "INSERT INTO" + table + " (" + cols.toString() + ") "  + "VALUES (" + 
    }
};