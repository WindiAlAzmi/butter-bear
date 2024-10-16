const express = require("express");
const route = express.Router();

const movieRoute = require("./movie-route");
const directorRoute = require("./director-route");

const authRoute = require("./auth-route");

route.use("/movies", movieRoute);
route.use("/directors", directorRoute);
route.use("/auth", authRoute);


module.exports = route;
