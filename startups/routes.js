const genresRouter = require("../routes/genres");
const homeRouter = require("../routes/home");
const moviesRouter = require("../routes/movies");
const usersRouter = require("../routes/users");
const authRouter = require("../routes/auth");
const videoRouter = require("../routes/video");
const error = require("../middleWare/error");
const express = require("express");

const methodOverride = require("method-override");
const bodyparser = require("body-parser");
module.exports = function (app) {
  app.use(bodyparser.json());
  app.use(methodOverride("_method"));
  app.use(express.json());
  app.set("view engine", "pug");
  app.set("views", "./views");
  app.use("/api/video", videoRouter);
  app.use("/api/genres", genresRouter);
  app.use("/api/movies", moviesRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/auth", authRouter);
  app.use("/", homeRouter);
  app.use(error);
};
