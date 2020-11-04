const orm = require("../config/orm.js");

// Pass through inputs to be handled by custom ORM
const burgerMenu = {

    selectAll: async () => orm.selectAll("burgers"),

    insertOne: async (col, burger) => orm.insertOne("burgers", col, burger),

    updateOne: async (state, burger) => orm.updateOne("burgers", state, burger),

    deleteOne: async (burger) => orm.deleteOne("burgers", burger)

};

module.exports = burgerMenu;

// console.log("model");