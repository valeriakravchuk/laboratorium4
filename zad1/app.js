const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const homeRouter = require("./routes/home");
const successRouter = require("./routes/success");
const listRouter = require("./routes/list")

const PORT = 3000;

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRouter);
app.use(successRouter)
app.use(listRouter)
app.listen(PORT);