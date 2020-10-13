const User = require('../models/userModel');

exports.postOne = async (req, res) => {
  try {
    const { email, firstName, lastName, userName, image } = req.body;
    const newUser = await User.create({
      email,
      firstName,
      lastName,
      userName,
      image,
    });
    res.status(201);
    res.send(newUser);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};

exports.getOne = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({
      where: { userId },
    });
    res.status(200);
    res.send(user);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};

exports.removeOne = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.destroy({ userId });
    res.sendStatus(200);
  } catch (error) {
    console.error('Error: ', error); // eslint-disable-line no-console
    res.sendStatus(400);
  }
};
