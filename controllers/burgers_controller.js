var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        res.render("index", {burgers: data});
    });
})

router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    burger.create(req.body, function(result) {
        res.json({id: result.insertId});
    });
 
});

module.exports = router;