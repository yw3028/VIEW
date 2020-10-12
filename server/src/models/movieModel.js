'use strict';
// The timestamp is added automatically by Sequelize

module.exports = (sequelize, type) => {
  const Movie = sequelize.define('Movie', {
    apiId: {
      type: type.INTEGER,
      allowNull: false,
    },
    poster: {
      type: type.STRING,
    },
    title: {
      type: type.STRING,
      allowNull: false,
    },
    year: {
      type: type.INTEGER,
    },
    genre: {
      type: type.STRING,
    },
    director: {
      type: type.STRING,
    },
    cast: {
      type: type.STRING,
    },
    plot: {
      type: type.STRING,
    },
    country: {
      type: type.STRING,
    },
    producers: {
      type: type.STRING,
    },
    runTime: {
      type: type.INTEGER,
    },
    avgRating: {
      type: type.INTEGER,
    },
  });
  Movie.associate = function (db) {
    Movie.belongsToMany(User, { through: 'Wishlist' });
    Movie.belongsToMany(User, { through: 'Watchedlist' });
    Movie.hasMany(Journal);
    Movie.belongsToMany(Genre, { through: db.GenreMovie });
  };
  return Movie;
};
