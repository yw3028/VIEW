const db = require('./index');

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
    Genre.belongsToMany(db.Movie, { through: db.GenreMovie });
  };
  return Genre;
};
