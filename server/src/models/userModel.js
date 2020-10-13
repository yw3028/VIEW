module.exports = (sequelize, type) => {
  const User = sequelize.define('User', {
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
  User.associate = function (db) {
    User.belongsToMany(db.Movie, { through: 'Wishlist' });
    User.belongsToMany(db.Movie, { through: 'Watchedlist' });
    User.hasMany(db.Journal);
  };
  return User;
};
