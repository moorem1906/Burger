var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 3000;

//Connecting the static public folder
app.use(express.static("public"))


//Connecting the body parser element
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Connecting to the handle bars element
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


//adding the routes 
var routes = require("./controllers/burgers_controller.js");
app.use(routes);



app.listen(PORT, function(){
    console.log("Server listening on: http://localhost: " + PORT);
});
