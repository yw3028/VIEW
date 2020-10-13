const { Movie } = require('../models');

const createMovie = async (req, res, next) => {
  if (!req.body.movieId) {
    const { id } = await Movie.create(req.body.movieObject);
    req.body.movieId = id;
  }
  await next();
};

module.exports = createMovie;