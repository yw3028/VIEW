const { Movie } = require('../models');

const createMovie = async (req, res, next) => {
  if (!req.body.MovieId) {
    req.body.movieObject.apiId = req.body.movieObject.id;
    delete req.body.movieObject.id;
    const { id } = await Movie.create(req.body.movieObject);
    req.body.MovieId = id;
  }
  await next();
};

module.exports = createMovie;