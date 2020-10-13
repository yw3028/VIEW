const db = require('./index');

module.exports = (sequelize, type) => {
  return sequelize.define('GenreMovie', {
    genreId: {
      type: type.INTEGER,
      references: {
        model: db.Genre,
        key: 'apiGenreId', // Needs confirmation we can use another foreign key to establish the relation
      },
    },
    movieId: {
      type: type.INTEGER,
      references: {
        model: db.Movie,
        key: 'id',
      },
    },
  });
};
