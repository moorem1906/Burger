var orm = require("../config/orm");

var burger   = {
selectAll: function (cb) { 
    orm.selectAll("burger", function(res){
        cb(res);

    });
}
insertOne: function(col, val, cb) {
    orm.selectAll("burger", col, val, function(res){
        cb(res);

    });
}
updateOne: function(objColVals, condition, cb){
    orm.selectAll("burger", objColVals, condition, function(res){
        cb(res);

    });
};
delectOne: function(condition, cb) {
    orm.selectAll("burger", condition, function(res){
        cb(res);
    });
}
};

module.exports = burger; 