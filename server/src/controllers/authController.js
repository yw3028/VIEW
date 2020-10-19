const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const { User } = require('../models');

const { GOOGLE_CLIENT_ID, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const sign = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, req, res) => {
  const token = sign(user.id);
  res.status(200).send({
    token,
    user,
  });
};

exports.googleLogin = async (req, res) => {
  try {
    const { tokenId } = req.body;

    // Verify the token that the token sent from the frontend is the same one we are using in the backend
    const response = await client.verifyIdToken({
      idToken: tokenId,
      audience: GOOGLE_CLIENT_ID,
    });
    const { name, email } = response.payload;
    const emailVerified = response.payload.email_verified;

    if (emailVerified) {
      const user = await User.findOrCreate({
        where: { email },
        defaults: { email, firstName: name },
      });
      const currentUser = Array.isArray(user) ? user[0] : user;
      req.user = currentUser;
      createSendToken(currentUser, req, res);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.protect = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];

    try {
      const decoded = await promisify(jwt.verify)(token, JWT_SECRET);
      const user = await User.findOne({
        where: { id: decoded.id },
      });

      req.user = user;
      next();
    } catch (error) {
      console.error(error);
    }
  }
};
