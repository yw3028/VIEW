const { Journal, Movie } = require('../models');

exports.getAllJournals = async (req, res) => {
  try {
    const { UserId } = req.body;
    const allJournals = await Journal.findAll({
      where: { UserId },
      include: [Movie],
    });
    res.send(allJournals);
    res.status(200);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};

exports.postJournal = async (req, res) => {
  try {
    const {
      title,
      date,
      entry,
      location,
      weather,
      weatherTemperature,
      UserId,
      MovieId,
    } = req.body;
    const newJournal = await Journal.create({
      title,
      date,
      entry,
      location,
      weather,
      weatherTemperature,
      UserId,
      MovieId,
    });
    res.send(newJournal);
    res.status(200);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};

exports.getJournal = async (req, res) => {
  try {
    const id = req.params.journalId;
    const { UserId } = req.body;
    const requestedJournal = await Journal.findOne({ where: { id, UserId } });
    res.send(requestedJournal);
    res.status(200);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};

exports.updateJournal = async (req, res) => {
  try {
    const id = req.params.journalId;
    const { title, entry } = req.body;
    const [numberofAffectedRows, affectedRows] = await Journal.update(
      {
        title,
        entry,
      },
      {
        where: { id },
        returning: true, // needed for affectedRows to be populated
        plain: true, // makes sure that the returned instances are just plain objects
      }
    );
    res.send(affectedRows);
    res.status(200);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};

exports.deleteJournal = async (req, res) => {
  try {
    const id = req.params.journalId;
    const journalToDelete = await Journal.findByPk(id);
    console.log('exports.deleteJournal -> journalToDelete', journalToDelete);
    await journalToDelete.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};
