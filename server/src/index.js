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

(async () =>{
  try {
    await dbConfig.sequelize.sync();
    app.listen(PORT);
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
  } catch (error) {
    console.error('Error connecting to the database', error); // eslint-disable-line no-console
  }
})();