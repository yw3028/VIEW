import Express, { json } from 'express';

import { config } from 'dotenv';
import cors from 'cors';

import { db } from './models';

import router from './router';

config();
const { PORT } = process.env;

const app = Express();

app.use(cors());
app.use(json());
app.use(router);

(async () =>{
  try {
    await db.sequelize.sync();
    app.listen(PORT);
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
  } catch (e) {
    console.error('Error connecting to the db', e); // eslint-disable-line no-console
  }
})();