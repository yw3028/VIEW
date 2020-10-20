const { User, Movie } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      res.sendStatus(500);
    }
    const wishes = await user.getWish();
    res.status(200).send(wishes);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.postOne = async (req, res) => {
  console.log("exports.postOne -> req.body", req.body)
  try {
    const user = await User.findByPk(req.user.id, { include: ['Wish']});
    if (!user) {
      res.sendStatus(500);
    }
    const { MovieId } = req.body;
    const wish = await user.addWish(MovieId);
    res.status(201).send(wish);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};

exports.removeOne = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, { include: ['Wish']});
    if (!user) {
      res.sendStatus(500);
    }
    const apiId = req.params.movieId;
    const foundMovie = user.Wish.find((movie) => movie.apiId === +apiId);
    await user.removeWish(foundMovie.id);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};
