const db = require('../models/index');
const mockedDb = require('./mockDataForDb');

// Helper function to create movies

const mockMovie = (movie) => {
  const {
    apiId,
    title,
    poster_path,
    backdrop_path,
    release_date,
    overview,
    avgRating,
  } = movie;
  setTimeout(() => {
    db.Movie.create({
      apiId,
      title,
      poster_path,
      backdrop_path,
      release_date,
      overview,
      avgRating,
    });
  }, 500);
};

// Helper function to create journals

const mockJournal = (journal) => {
  const {
    title,
    entry,
    location,
    weather,
    weatherTemperature,
    MovieId,
    UserId,
  } = journal;
  setTimeout(() => {
    db.Journal.create(
      {
        title,
        entry,
        location,
        weather,
        weatherTemperature,
        MovieId,
        UserId,
      },
      500
    );
  });
};

module.exports = () => {
  mockedDb.dbMovies.forEach((movie) => mockMovie(movie));
  setTimeout(() => {
    db.User.create({ email: 'jaume@gmail.com' }).then((user) =>
      user
        .addWish(1)
        .then(() => user.addWish(3))
        .then(() => user.addWish(5))
        .then(() => user.addWish(7))
        .then(() => user.addWish(9))
        .then(() => user.addWish(11))
        .then(() => user.addWatched(13))
        .then(() => user.addWatched(15))
        .then(() => user.addWatched(17))
        .then(() => user.addWatched(19))
        .then(() => user.addWatched(2))
        .then(() => user.addWatched(4))
    );
    db.User.create({ email: 'wangyu@gmail.com' }).then((user) =>
      user
        .addWish(2)
        .then(() => user.addWish(6))
        .then(() => user.addWish(10))
        .then(() => user.addWish(12))
        .then(() => user.addWish(8))
        .then(() => user.addWish(4))
        .then(() => user.addWatched(16))
        .then(() => user.addWatched(18))
        .then(() => user.addWatched(20))
        .then(() => user.addWatched(3))
        .then(() => user.addWatched(7))
        .then(() => user.addWatched(14))
    );
    db.User.create({ email: 'jmaciasalord@gmail.com' }).then((user) =>
      user
        .addWish(4)
        .then(() => user.addWatched(1))
        .then(() => user.addWish(6))
        .then(() => user.addWish(10))
        .then(() => user.addWish(5))
        .then(() => user.addWish(7))
        .then(() => user.addWish(9))
        .then(() => user.addWish(12))
        .then(() => user.addWatched(20))
        .then(() => user.addWatched(2))
        .then(() => user.addWatched(3))
        .then(() => user.addWatched(8))
        .then(() => {
          mockedDb.dbJournals.forEach((journal) => mockJournal(journal));
        })
        .then(() => console.log('>>>>>> DATABASE MOCKED <<<<<<'))
    );
  }, 500);
};
