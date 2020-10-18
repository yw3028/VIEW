const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const { User } = require('../models');

const {
  GOOGLE_CLIENT_ID,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  JWT_COOKIE_EXPIRES_IN,
} = process.env;

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

      createSendToken(user, req, res);
    }
  } catch (error) {
    console.log(error);
  }
};
