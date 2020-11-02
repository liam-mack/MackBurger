const connection = require("./connection.js");
// const util = require("util");

const orm = {
    selectAll: async (table) => {
        try {
            const query = `SELECT * FROM ${table}`;
            return await connection.query(query);
        } catch (err) {
            if (err) throw err;
        }
    },

    insertOne: async (table, col, burger) => {
        try {
            const query = "INSERT INTO ??(??) values (?)";
            return await connection.query(query, [table, col, burger]);
        } catch (err) {
            if (err) throw err;
        }
    },

    updateOne: async (table, state, burger) => {
        try {
            const query = "UPDATE ?? SET ? WHERE ?";
            return await connection.query(query, [table, state, burger]);
            
        } catch(err) {
            if (err) throw err;
        }
    },

    deleteOne: async (table, burger) => {
        try {
            let query = "DELETE FROM ?? WHERE ?";
            return await connection.query(query, [table, burger]);
        } catch (err) {
            if (err) throw err;
        }
    }
}
module.exports = orm;

