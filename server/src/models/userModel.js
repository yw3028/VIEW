'use strict';
// The timestamp is added automatically by Sequelize

module.exports = (sequelize, type) => {
  return sequelize.define('User', {
    email: {
      type: type.STRING,
      allowNull: false,
    },
    firstName: {
      type: type.STRING,
    },
    lastName: {
      type: type.STRING,
    },
    userName: {
      type: type.STRING,
    },
    image: {
      type: type.STRING,
    },
  });
};

User.belongsToMany(Movie, { through: 'Wishlist' });
User.belongsToMany(Movie, { through: 'Watchedlist' });
User.hasMany(Journal);
