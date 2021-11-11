const express = require("express");
const router = express.Router();

const getAllMovies = require("../Controller/getData");

router.get("/movies", getAllMovies.getAllMovies);

module.exports = router;
