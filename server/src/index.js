const express = require('express');
const morgan = require('morgan');

const { config } = require('dotenv');
const cors = require('cors');

const { sequelize } = require('./models');

const userRouter = require('./routes/userRouter');
const wishlistRouter = require('./routes/wishlistRouter');
const watchedlistRouter = require('./routes/watchedlistRouter');
const journalRouter = require('./routes/journalRouter');
const authRouter = require('./routes/authRouter');
const mockDbDev = require('./utils/mockDbDev');
const { protect } = require('./controllers/authController');

config();
const { PORT } = process.env;

const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('short'));
}
app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.headers);
//   next();
// });

app.use(protect);

app.use('/googlelogin', authRouter);
app.use('/user', userRouter);
app.use('/wishlist', wishlistRouter);
app.use('/watched', watchedlistRouter);
app.use('/journal', journalRouter);

app.all('*', (req, res, next) => {
  console.error(`${req.url} not found in this server`);
  res.sendStatus(404);
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Connected to the database'); // eslint-disable-line no-console
    await app.listen(PORT);
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
    if (process.env.NODE_ENV === 'development') mockDbDev();
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
})();
