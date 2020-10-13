const Journal = require('../models/journalModel');

exports.getAllJournals = async (req, res) => {
  try {
    const allJournals = await Journal.findAll({});
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
    const { id } = req.body;
    const requestedJournal = await Journal.findByPk(id);
    // Doubt: do we have to check what happens if journal not found?? It wouldn't be displayed before so it shouldn't be a problem
    res.send(requestedJournal);
    res.status(200);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};

exports.updateJournal = async (req, res) => {
  try {
    const { id, title, entry } = req.body;
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
    const { id } = req.body;
    const journalToDelete = await Journal.findByPk(id);
    await journalToDelete.destroy();
    res.status(200);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};
