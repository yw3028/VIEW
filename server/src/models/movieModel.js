module.exports = (sequelize, type) => {
  const Movie = sequelize.define('Movie', {
    apiId: {
      type: type.INTEGER,
      allowNull: false,
    },
    poster_path: {
      type: type.STRING,
    },
    backdrop_path: {
      type: type.STRING,
    },
    title: {
      type: type.STRING,
      allowNull: false,
    },
    release_date: {
      type: type.DATE,
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
    overview: {
      type: type.STRING(1000),
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
    vote_average: {
      type: type.FLOAT,
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
