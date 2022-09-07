const express = require("express");
const router = express.Router();
const auth = require("../middleWare/auth");
const Movie = require("../models/moive");
const { Genre } = require("../models/genre");

router.get("/:id", async (req, res) => {
  res.send(await Movie.findById(req.params.id));
});

router.get("/", async (req, res) => {
  res.send(await Movie.find());
});

router.post("/", auth, async (req, res) => {
  const genre = await Genre.findById(req.body.genreId);
  const movie = new Movie({
    title: req.body.title,
    genre: genre,
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
    filename: req.body.filename,
  });
  await movie.save();
  res.send(movie);
});
router.put("/:id", async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      genre: req.body.genre,
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate,
    }
  );
  res.send(movie);
});
router.delete("/:id", async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);
  res.send(movie);
});
module.exports = router;
