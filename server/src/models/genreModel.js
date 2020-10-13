const db = require('./index');

module.exports = (sequelize, type) => {
  const Genre = sequelize.define('Genre', {
    name: {
      type: type.STRING,
      allowNull: false,
    },
    apiId: {
      type: type.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  });
  Genre.associate = function (db) {
    Genre.belongsToMany(db.Movie, {
      through: 'GenreMovies',
    });
  };
  return Genre;
};
