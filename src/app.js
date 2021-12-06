require("dotenv").config();
const corsOptions = require("./util/corsOptions");
const { verifyToken } = require("./util/jwt");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors(corsOptions()));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(verifyToken);
app.use("/example", require("./components/example/router"));

module.exports = app;
