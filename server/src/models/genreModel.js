'use strict';

module.exports = (sequelize, type) => {
  const Genre = sequelize.define('Genre', {
    genre: {
      type: type.STRING,
      allowNull: false,
    },
    apiGenreId: {
      type: type.INTEGER,
      allowNull: false,
    },
  });
  Genre.associate = function (db) {
    Genre.belongsToMany(Movie, { through: db.GenreMovie });
  };
  return Genre;
};
