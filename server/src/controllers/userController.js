const { User } = require('../models');

exports.postOne = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};

exports.getOne = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({
      where: { id: userId },
    });
    res.status(200).send(user);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.removeOne = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.destroy({
      where: { id: userId },
    });
    res.sendStatus(200);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};
