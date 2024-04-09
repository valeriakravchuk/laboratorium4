const express = require("express");
const path = require("path");


const router = express.Router();

router.get("/students-list", (request, response, next) => {
    response.render("List", {
        pageTitle: "List"
    });
});
router.post("/add-student", (request, response, next) => {
    response.redirect("/students-list")
});

module.exports = router;