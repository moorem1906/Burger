var express = require("express");
var burger = require('../models/burger');

//buiding the router connections to manage database arrays 

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hdbrsObj = {
            burger: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });
});

router.post("/api/Burger", function (req, res) {
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function (results) {
            res.json({ id: results.insertId });
        }
    );
});

router.put("/api/Burger", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function (results) {
        if (result.changedRows === 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }
    });

});

router.delete("/api/Burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.deleteOne({ devoured: req.body.devoured }, condition, function (results) {
        if (result.changedRows === 0) {
            return res.status(404).end();

        } else {
            res.status(200).end();
        }

    });
});

module.exports = router; 
