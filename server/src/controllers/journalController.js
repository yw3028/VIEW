const { Journal, Movie } = require('../models');

exports.getAllJournals = async (req, res) => {
  try {
    // const { UserId } = req.body;
    const allJournals = await Journal.findAll({
      where: { UserId: 1 },
      include: [Movie],
    });
    res.status(200).send(allJournals);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};

exports.postJournal = async (req, res) => {
  try {
    const newJournal = await Journal.create(req.body);
    res.status(200).send(newJournal);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};

exports.getJournal = async (req, res) => {
  try {
    const id = req.params.journalId;
    const { UserId } = req.body;
    const requestedJournal = await Journal.findOne({
      where: { id, UserId },
      include: [Movie],
    });
    res.status(200).send(requestedJournal);
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
    res.status(200).send(affectedRows);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};

exports.deleteJournal = async (req, res) => {
  try {
    const id = req.params.journalId;
    const journalToDelete = await Journal.findByPk(id);
    await journalToDelete.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.error('Error', error); // eslint-disable-line
    res.sendStatus(500);
  }
};
