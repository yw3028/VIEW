const { Movie } = require('../models');

exports.createMovie = async (req, res, next) => {
  if (!req.body.movieId) {
    const { id } = await Movie.create(req.body.movieObject);
    req.body.movieId = id;
  }
  await next();
};
