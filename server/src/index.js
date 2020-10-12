const Express = require('express');

const { config } = require('dotenv');
const cors = require('cors');

const { db } = require('./models');

const router = require('./routes/router');

config();
const { PORT } = process.env;

const app = Express();

app.use(cors());
app.use(json());
app.use(router);

(async () => {
  try {
    await db.sequelize.sync();
    console.log('Connected to the database'); // eslint-disable-line no-console
    await app.listen(PORT);
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
})();
