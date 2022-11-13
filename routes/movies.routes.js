const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get("/create", async (req, res) => {
  try {
    const allCeleb = await Celebrity.find();
    res.render("movies/new-movies", { allCeleb });
  } catch (error) {
    console.error(error);
  }
});

router.post("/create", async (req, res) => {
  const { title, genre, plot, cast } = req.body;
  try {
    await Movie.create({ title, genre, plot, cast });
    res.redirect("/movies/movies");
  } catch (error) {
    console.error(error);
    res.render("movies/new-movies");
  }
});

router.get("/movies", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    const allCeleb = await Celebrity.find();
    res.render("movies/movies", { allCeleb, allMovies });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.render("movies/movie-details", { allMovies });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
