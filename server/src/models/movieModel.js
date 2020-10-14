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
  Movie.associate = (db) => {
    Movie.belongsToMany(db.User, { through: 'Wishlist' });
    Movie.belongsToMany(db.User, { through: 'Watchedlist' });
    Movie.hasMany(db.Journal);
    Movie.belongsToMany(db.Genre, {
      through: 'GenreMovies',
    });
  };
  return Movie;
};
