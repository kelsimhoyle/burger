var connection = require("../config/connection.js")

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = `SELECT * FROM ??;`;

        connection.query(queryString, tableInput, function(err, result) {
            if (err) throw err;

            cb(result);
        })
    },
    insertOne: function(table, data, cb) {
        var queryString = `INSERT INTO ?? SET ?;`;

        connection.query(queryString, [table, data], function(err, result) {
            if (err) throw err;
            
            cb(result)
        })
    },
    updateOne: function(table, data, condition, cb) {
        var queryString = `UPDATE ${table} SET ? WHERE ?`;

        connection.query(queryString, [data, condition], function(err, result) {
            if (err) throw err;

            cb(result);
        })
    }
}

module.exports = orm;