const { User } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const { UserId } = req.body;
    const user = await User.findByPk(UserId);
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
  try {
    const { UserId, MovieId } = req.body;
    const user = await User.findByPk(UserId);
    if (!user) {
      res.sendStatus(500);
    }
    const wish = await user.addWish(MovieId);
    res.status(201).send(wish);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};

exports.removeOne = async (req, res) => {
  try {
    const { UserId } = req.body;
    const user = await User.findByPk(UserId);
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
