'use strict';

module.exports = (sequelize, type) => {
  return sequelize.define('Genre', {
    genre: {
      type: type.STRING,
      allowNull: false,
    },
    apiGenreId: {
      type: type.INTEGER,
      allowNull: false,
    },
  });
};

Genre.belongsToMany(Movie, { through: 'GenreMovie' }); // NEEDS CONFIRMATION: DOES IT NEED TO BE A STRING?
