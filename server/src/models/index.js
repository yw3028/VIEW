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

//FOR TESTING, PLEASE DELETE IN THE END

setTimeout(() => {
  db.Movie.create({ title: 'movie title', apiId: 4543 }).then((movie) => {
    db.Genre.create({ name: 'hello', apiId: 23 }).then((genre) => {
      genre.addMovie(movie.id);
    });
  });
}, 7000);

setTimeout(() => {
  db.Movie.create({ title: 'second Movie', apiId: 453 }).then((movie) => {
    db.Genre.create({ name: 'bye', apiId: 1265 }).then((genre) => {
      genre.addMovie(movie.id).then(() => {
        genre.getMovies().then((movies) => {
          console.log('MOVIES', movies);
        });
      });
    });
  });
}, 10000);
