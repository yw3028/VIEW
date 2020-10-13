const express = require('express');
const morgan = require('morgan');

const { config } = require('dotenv');
const cors = require('cors');

const { sequelize } = require('./models');

const router = require('./routes/router');

config();
const { PORT } = process.env;

const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('short'));
}
app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Connected to the database'); // eslint-disable-line no-console
    await app.listen(PORT);
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
})();
