const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  name: String,
  birthDate: Date,
  oscar: Boolean,
});

const Director = mongoose.model("Director", directorSchema);

module.exports = Director;

