const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  overview: String,
  year: Number,
  director: {
    type: mongoose.ObjectId,
    ref: "Director",
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
