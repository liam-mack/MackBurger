const connection = require("./connection.js");
// const util = require("util");

const orm = {
    selectAll: async (table) => {
        try {
            const query = `SELECT * FROM ${table}`;
            return await connection.query(query, table);
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
            console.log(`burger is: ${burger}`)
            const query = "UPDATE ?? SET ? WHERE ?";
            return await connection.query(query, [table, state, burger]);
            
        } catch(err) {
            if (err) throw err;
        }
    },

    deleteOne: async (table, burger) => {
        console.log(`burger is ${burger}`)
        try {
            let query = "DELETE FROM ?? WHERE ?";
            return await connection.query(query, [table, burger]);
        } catch (err) {
            if (err) throw err;
        }
    }
}
module.exports = orm;

console.log("orm")
// console.log(`burger is: ${burger}`)