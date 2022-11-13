const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  try {
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities/celebrities");
  } catch (error) {
    console.error(error);
    res.render("celebrities/new-celebrity");
  }
});

router.get("/celebrities", async (req, res) => {
  try {
    const allCeleb = await Celebrity.find();
    res.render("celebrities/celebrities", { allCeleb });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
