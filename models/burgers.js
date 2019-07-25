var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(data, cb) {
        orm.insertOne("burgers", data, function(res) {
            cb(res);
        })
    },
    update: function(data, condition, cb) {
        orm.updateOne("burgers", data, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;