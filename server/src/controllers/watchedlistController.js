const { User } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      res.sendStatus(500);
    }
    const watchedMovies = await user.getWatched();
    res.status(200).send(watchedMovies);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.postOne = async (req, res) => {
  try {
    const user = await User.findByPk(1, { include: ['Watched']});
    if (!user) {
      res.sendStatus(500);
    }
    const { MovieId } = req.body;
    const watchedMovie = await user.addWatched(MovieId);
    res.status(201).send(watchedMovie);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};

exports.removeOne = async (req, res) => {
  try {
    // const { UserId } = req.body;
    const user = await User.findByPk(1, { include: ['Watched']});
    if (!user) {
      res.sendStatus(500);
    }
    const apiId = req.params.movieId;
    const foundMovie = user.Watched.find((movie) => movie.apiId === +apiId);
    await user.removeWatched(foundMovie.id);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};
