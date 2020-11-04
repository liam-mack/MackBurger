const connection = require("./connection.js");
// const util = require("util");


// Queries SQL with input passed through by Model; selects all burgers
const orm = {
    selectAll: async (table) => {
        try {
            const query = `SELECT * FROM ${table};`;
            return await connection.query(query);
        } catch (err) {
            if (err) throw err;
        }
    },

// Queries SQL with input array passed through by Model; inserts into table new burger
    insertOne: async (table, col, burger) => {
        try {
            const query = "INSERT INTO ??(??) values (?);";
            return await connection.query(query, [table, col, burger]);
        } catch (err) {
            if (err) throw err;
        }
    },

// Queries SQL with input array passed through by Model; updates burger status
    updateOne: async (table, state, burger) => {
        try {
            const query = "UPDATE ?? SET ? WHERE ?;";
            return await connection.query(query, [table, state, burger]);
            
        } catch(err) {
            if (err) throw err;
        }
    },

// Queries SQL with input passed through by Model; deletes burger from table
    deleteOne: async (table, burger) => {
        try {
            let query = "DELETE FROM ?? WHERE ?;";
            return await connection.query(query, [table, burger]);
        } catch (err) {
            if (err) throw err;
        }
    }
}
module.exports = orm;

