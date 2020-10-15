const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const db = {};

const { config } = require('dotenv');

config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  dialect: 'postgres',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000000,
    idle: 10000000,
  },
  logging: false,
});

// Mandatory Sequelize code to avoid manual import to all the files
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// setTimeout(() => {
//   db.Movie.create({ title: 'Mulan', apiId: 123 }).then((movie) => {
//     db.Genre.create({ name: 'adventure', apiId: 23 }).then((genre) => {
//       genre.addMovie(movie.id);
//     });
//   });
// }, 3000);
// setTimeout(() => {
//   db.Movie.create({ title: 'La grande belleza', apiId: 321 }).then((movie) => {
//     db.Genre.create({ name: 'drama', apiId: 13 }).then((genre) => {
//       genre.addMovie(movie.id);
//     });
//   });
// }, 3000);
// setTimeout(() => {
//   db.Movie.create({ title: 'October Sky', apiId: 654 }).then((movie) => {
//     db.Genre.create({ name: 'biography', apiId: 9 }).then((genre) => {
//       genre.addMovie(movie.id);
//     });
//   });
// }, 3000);
// setTimeout(() => {
//   db.Movie.create({ title: 'Interstellar', apiId: 456 }).then((movie) => {
//     db.Genre.create({ name: 'sci-fiction', apiId: 45 }).then((genre) => {
//       genre.addMovie(movie.id).then(() => {
//         genre.getMovies().then((movies) => {});
//       });
//     });
//   });
// }, 3000);
// setTimeout(() => {
//   db.User.create({ email: 'jaume@gmail.com' }).then((user) =>
//     user
//       .addWish(1)
//       .then(() => user.addWish(2))
//       .then(() => user.addWish(3))
//       .then(() => user.addWatched(4))
//   );
//   db.User.create({ email: 'wangyu@gmail.com' }).then((user) =>
//     user
//       .addWish(1)
//       .then(() => user.addWatched(2))
//       .then(() => user.addWatched(3))
//       .then(() => user.addWatched(4))
//   );
//   db.User.create({ email: 'junglegeorge@gmail.com' });
// }, 3000);

// setTimeout(() => {
//   // db.Journal.create({
//   //   title: 'Fleur du sal',
//   //   entry: 'Yesterday was a rainy day',
//   //   location: 'Barcelona',
//   //   weather: 'cloudy',
//   //   weatherTemperature: 17,
//   //   MovieId: 2,
//   //   UserId: 1,
//   // });
//   db.Journal.create({
//     title: 'Hello World!',
//     entry: 'This is my second journal entry',
//     location: 'Madrid',
//     weather: 'Sunny',
//     weatherTemperature: 23,
//     MovieId: 1,
//     UserId: 1,
//   });
//   db.Journal.create({
//     title: 'I am in the best team ever',
//     entry: 'I wHish I was like Jhim Jhim',
//     date: new Date('September 17, 2020 03:24:00'),
//     location: 'Roma',
//     weather: 'Sunny',
//     weatherTemperature: 23,
//     MovieId: 4,
//     UserId: 1,
//   });
//   console.log('DATABASE MOCKED'); // eslint-disable-line
// }, 3000);