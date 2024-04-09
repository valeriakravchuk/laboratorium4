const express = require("express");
const path = require("path");


const router = express.Router();

router.get("/", (request, response, next) => {
    response.render("home", {
        pageTitle: "Home",
    });
});

module.exports = router;