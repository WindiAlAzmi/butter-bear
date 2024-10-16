const Movie = require("../models/Movie");

module.exports = {
  getAllMovie: async (req, res) => {
    const data = await Movie.find({});

    res.json({
      message: "data ada nih",
      data,
    });
  },
  getMovieById: async (req, res) => {
    const { id } = req.params;
    const getDataById = await Movie.findById(id).exec();

    res.json({
      message: "dapet data by id",
      data: getDataById,
    });
  },
  addMovie: (req, res) => {
    const data = req.body;

    const newMovie = new Movie(data); //Model.init() --> pertama kali
    newMovie.save();

    res.json({
      message: "data berhasil dibuat",
    });
  },
  editMovieById: async (req, res) => {
    const data = req.body;
    const { id } = req.params;

    const updatedData = await Movie.findByIdAndUpdate(id, data, { new: true });

    res.json({
      message: "data berhasil diubah",
      data: updatedData,
    });
  },
  deleteMovieById: async (req, res) => {
    const { id } = req.params;

    await Movie.findByIdAndDelete(id);
    res.json({
      message: "data berhasil dihapus",
    });
  },
  deleteMovies: async (req, res) => {
    await Movie.findByIdAndDelete(id);
    res.json({
      message: "data berhasil dihapus",
    });
  },
  deleteAllMovies: async (req, res) => {
    await Movie.deleteMany({});

    res.json({
      message: "semua data movie berhasil dihapus",
    });
  },
};
