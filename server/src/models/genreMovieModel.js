module.exports = (sequelize, type) => {
  return sequelize.define('GenreMovie', {
    genreId: {
      type: DataTypes.INTEGER,
      references: {
        model: Genre,
        key: 'apiGenreId', // Needs confirmation we can use another foreign key to establish the relation
      },
    },
    movieId: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie,
        key: 'id',
      },
    },
  });
};
