const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// router.get("/hello", (req, res) => {
//     burger.selectAll().then((data) => {
//         res.json({data});
//     });
// });


// GET request & route to render index template with injected handlebars object
router.get("/", async (req, res) => {
    // res.render("index")

    burger.selectAll().then((data) => {
        let hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj);
    });
});

// POST request & route to insert new order/burger name
    router.post("/api/burgers", async (req, res) => {
        burger.insertOne(["burger_name"], req.body.burger_name).then((input) => {
            res.json({ id: input.insertId });
        })
    });

    // PUT request & route to handle SQL update query
    router.put("/api/burgers/:id", async (req, res) => {
        const state = { id: req.params.id };
        const devoured = req.body;


        burger.updateOne(devoured, state).then((output) => {
            if (output.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

    // DELETE request & route to remove burgers
    router.delete("/api/burgers/:id", async (req, res) => {
        const id = { id: req.params.id };
        const devoured = req.body;

        burger.deleteOne(id, devoured).then((output) => {
            if (output.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
    router.get("*", async (req, res) => {
        res.redirect("/");
      });

module.exports = router;

// console.log("controller")

