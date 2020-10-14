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
  User.associate = (db) => {
    User.belongsToMany(db.Movie, { through: 'Wishlist', as: 'Wish' });
    User.belongsToMany(db.Movie, { through: 'Watchedlist', as: 'Watched' });
    User.hasMany(db.Journal);
  };
  return User;
};
