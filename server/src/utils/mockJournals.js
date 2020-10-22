const db = require('../models/index');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const arrMoviesIds = require('./arrMoviesIds');
const { postJournal } = require('../../../client/src/Services/apiClient');

// Generate random date
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Array of cities and random city picker
const cities = [
  'Barcelona',
  'Madrid',
  'Paris',
  'Roma',
  'ISS',
  'Casablanca',
  'Athens',
  'Tokio',
  'Berlin',
  'London',
  'Brussels',
  'Milan',
  'Shanghai',
];

const randomCity = () => cities[Math.floor(Math.random() * cities.length)];

// Generate random Int for Temperature
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Generate random titles and entries
const loremBody = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
const loremTitle = new LoremIpsum({
  wordsPerSentence: {
    max: 5,
    min: 3,
  },
});

// Array of MovieId to pick from
const randomMovieId = () =>
  arrMoviesIds[Math.floor(Math.random() * arrMoviesIds.length)];

// Array of UserId to pick from

// Generate random journals

const generateRandJournals = (amount) => {
  let i = 0;
  while (i < amount) {
    let randomJournal = {};
    randomJournal.title = loremTitle.generateSentences(1);
    randomJournal.date = randomDate(new Date(2020, 0, 5), new Date());
    randomJournal.entry = loremBody.generateParagraphs(8);
    randomJournal.location = randomCity();
    randomJournal.weatherTemperature = getRandomInt(35);
    randomJournal.UserId = 4;
    randomJournal.movieObject = { id: Number(randomMovieId()) };
    console.log('I am HERE!!');
    db.Journal.create(randomJournal);
    i++;
  }
};

module.exports = () => generateRandJournals(2);
