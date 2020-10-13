module.exports = (sequelize, type) => {
  const Journal = sequelize.define('Journal', {
    title: {
      type: type.STRING,
    },
    date: {
      type: type.DATE,
    },
    entry: {
      type: type.STRING,
    },
    location: {
      type: type.STRING,
    },
    weather: {
      type: type.STRING,
    },
    weatherTemperature: {
      type: type.INTEGER,
    },
  });
  Journal.associate = function (db) {
    Journal.belongsTo(db.User);
    Journal.belongsTo(db.Movie);
  };
  return Journal;
};
