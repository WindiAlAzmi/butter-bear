const express = require("express");
const {
  getAllMovie,
  getMovieById,
  addMovie,
  editMovieById,
  deleteMovieById,
  deleteAllMovies,
} = require("../controllers/movie-controller");
const { validateToken } = require("../middleware/auth");

const router = express.Router();

router.get("/", getAllMovie);
router.get("/:id", getMovieById);
router.post("/", validateToken, addMovie);
router.put("/:id", validateToken, editMovieById);
router.delete("/:id", validateToken, deleteMovieById);
router.delete("/", validateToken, deleteAllMovies);

module.exports = router;
