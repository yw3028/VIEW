const { Movie } = require('../models');

const createMovie = async (req, res, next) => {
  if (!req.body.MovieId) {
    const { id } = await Movie.create(req.body.movieObject);
    req.body.MovieId = id;
  }
  await next();
};

module.exports = createMovie;