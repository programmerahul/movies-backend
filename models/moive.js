const { genreSchema } = require("../models/genre");
const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema({
  title: { type: String, required: true, min: 5, max: 255 },
  genre: { type: genreSchema, required: true },
  numberInStock: { type: Number, require: true, min: 0, max: 10 },
  dailyRentalRate: { type: Number, require: true, min: 0, max: 10 },
  filename: String,
});
const Movie = mongoose.model("Movie", moviesSchema);
module.exports = Movie;
