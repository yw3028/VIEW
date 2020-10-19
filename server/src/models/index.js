const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const db = {};

const { config } = require('dotenv');

config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  dialect: 'postgres',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000000,
    idle: 10000000,
  },
  logging: false,
});

// Mandatory Sequelize code to avoid manual import to all the files
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

setTimeout(() => {
  db.Movie.create({
    apiId: 497582,
    title: 'Enola Holmes',
    poster: '/riYInlsq2kf1AWoGm80JQW5dLKp.jpg',
    backdrop: '/kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg',
    releaseDate: '2020-09-23',
    plot:
      'While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.',
    avgRating: 7.6,
  });
  db.Movie.create({
    apiId: 337401,
    title: 'Mulan',
    poster: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
    backdrop: '/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
    releaseDate: '2020-09-04',
    plot:
      'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.',
    avgRating: 7.3,
  });
  db.Movie.create({
    apiId: 539885,
    title: 'Ava',
    poster: '/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg',
    backdrop: '/54yOImQgj8i85u9hxxnaIQBRUuo.jpg',
    releaseDate: '2020-07-02',
    plot:
      'A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.',
    avgRating: 5.9,
  });
  db.Movie.create({
    apiId: 475430,
    title: 'Artemis Fowl',
    poster: '/tI8ocADh22GtQFV28vGHaBZVb0U.jpg',
    backdrop: '/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg',
    releaseDate: '2020-06-12',
    plot:
      'Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father(s) disappearance.',
    avgRating: 5.8,
  });
  db.Movie.create({
    apiId: 721452,
    title: 'One Night in Bangkok',
    poster: '/i4kPwXPlM1iy8Jf3S1uuLuwqQAV.jpg',
    backdrop: '/riDrpqQtZpXGeiJdlmfcwwPH7nN.jpg',
    releaseDate: '2020-08-25',
    plot:
      'A hit man named Kai flies into Bangkok, gets a gun, and orders a cab. He offers a professional female driver big money to be his all-night driver. But when she realizes Kai is committing brutal murders at each stop, it(s) too late to walk away. Meanwhile, an offbeat police detective races to decode the string of slayings before more blood is spilled.',
    avgRating: 7.2,
  });
}, 2000);
setTimeout(() => {
  db.User.create({ email: 'jaume@gmail.com' }).then((user) =>
    user
      .addWish(1)
      .then(() => user.addWish(2))
      .then(() => user.addWish(3))
      .then(() => user.addWatched(5))
  );
  db.User.create({ email: 'wangyu@gmail.com' }).then((user) =>
    user
      .addWish(1)
      .then(() => user.addWish(5))
      .then(() => user.addWatched(2))
      .then(() => user.addWatched(3))
      .then(() => user.addWatched(4))
  );
  db.User.create({ email: 'junglegeorge@gmail.com' }).then((user) =>
    user.addWish(4).then(() => user.addWatched(1))
  );
}, 2500);
setTimeout(() => {
  db.Journal.create({
    title: 'Fleur du sal',
    entry: 'Yesterday was a rainy day',
    location: 'Barcelona',
    weather: 'cloudy',
    weatherTemperature: 17,
    MovieId: 2,
    UserId: 1,
  });
  db.Journal.create({
    title: 'Hello World!',
    entry: 'This is my second journal entry',
    location: 'Madrid',
    weather: 'Sunny',
    weatherTemperature: 23,
    MovieId: 1,
    UserId: 1,
  });
  db.Journal.create({
    title: 'I am in the best team ever',
    entry: 'I wHish I was like Jhim Jhim',
    date: new Date('2020-12-07T03:24:00'),
    location: 'Roma',
    weather: 'Sunny',
    weatherTemperature: 23,
    MovieId: 4,
    UserId: 1,
  });
  db.Journal.create({
    title: 'Hmmmmmm',
    entry:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
    date: new Date('2020-09-01T03:24:00'),
    location: 'Roma',
    weather: 'Sunny',
    weatherTemperature: 23,
    MovieId: 3,
    UserId: 1,
  });
  db.Journal.create({
    title: 'This is another Lorem',
    entry:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
    date: new Date('2020-09-27T03:24:00'),
    location: 'Roma',
    weather: 'Sunny',
    weatherTemperature: 23,
    MovieId: 5,
    UserId: 1,
  });
  db.Journal.create({
    title: 'I am in the best team ever',
    entry:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
    date: new Date('2020-12-18T03:24:00'),
    location: 'Roma',
    weather: 'Sunny',
    weatherTemperature: 23,
    MovieId: 3,
    UserId: 1,
  });
  db.Journal.create({
    title: 'I am in the best team ever',
    entry:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
    date: new Date('2020-12-19T03:24:00'),
    location: 'Roma',
    weather: 'Sunny',
    weatherTemperature: 23,
    MovieId: 3,
    UserId: 1,
  });
  console.log('DATABASE MOCKED'); // eslint-disable-line
}, 3000);
