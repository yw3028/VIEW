const { User } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const user = await User.findByPk(1);
    if (!user) {
      res.sendStatus(500);
    }
    const wishes = await user.getWish();
    res.status(200);
    res.send(wishes);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

// const user = await User.findByPk(1);
// const watched = await user.addMovie(1)
// const wish = await user.getWish()

exports.getOne = async (req, res) => {
  try {
    const user = await User.findByPk(1);
    if (!user) {
      res.sendStatus(500);
    }
    const { movieId } = req.params;
    const wishes = await user.getWish();
    const wish = wishes.filter((wish) => wish.id === movieId);
    res.status(200);
    res.send(wish);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.postOne = async (req, res) => {
  try {
    const { userId, movieId } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      res.sendStatus(500);
    }
    const wish = await user.addWish(movieId);
    res.status(201);
    res.send(wish);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};

exports.removeOne = async (req, res) => {
  try {
    const user = await User.findByPk(1);
    if (!user) {
      res.sendStatus(500);
    }
    const { movieId } = req.params;
    await user.removeWish(movieId);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};
