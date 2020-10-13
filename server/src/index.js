const Express = require('express');

const { config } = require('dotenv');
const cors = require('cors');

const { db } = require('./models');

const router = require('./routes/router');

config();
const { PORT } = process.env;

const app = Express();

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    await db.sequelize.sync();
    app.listen(PORT);
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
  } catch (error) {
    console.error('Error connecting to the database', error); // eslint-disable-line no-console
  }
})();
