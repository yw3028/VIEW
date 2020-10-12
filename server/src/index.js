import Express, { json } from 'express';

import { config } from 'dotenv';
import cors from 'cors';

import { dbConfig } from './models';

import router from './router';

config();
const { PORT } = process.env;

const app = Express();

app.use(cors());
app.use(json());
app.use(router);

(async () => {
  try {
    await dbConfig.sequelize.sync();
    console.log('Connected to the database'); // eslint-disable-line no-console
    await app.listen(PORT);
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
})();
