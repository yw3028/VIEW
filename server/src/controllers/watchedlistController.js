// const Watchedlist = require('../models/watchedlist');

// exports.getAll = async (req, res) => {
//   try {
//     const movies = await Watchedlist.find();
//     res.status(200);
//     res.send(movies);
//   } catch (error) {
//     console.error('Error: ', error); // eslint-disable-line no-console
//     res.sendStatus(500);
//   }
// };

// exports.getOne = async (req, res) => {
//   try {
//     const { movieId } = req.params;
//     const movie = await Watchedlist.findOne({
//       where: {
//         userId: req.body.userId,
//         movieId,
//       },
//     });
//     res.status(200);
//     res.send(movie);
//   } catch (error) {
//     console.error('Error: ', error); // eslint-disable-line no-console
//     res.sendStatus(500);
//   }
// };

// exports.postOne = async (req, res) => {
//   try {
//     const { movieId } = req.params;
//     const { userId } = req.body;
//     const newMovie = await Watchedlist.create({ userId, movieId });
//     res.status(201);
//     res.send(newMovie);
//   } catch (error) {
//     console.error('Error: ', error); // eslint-disable-line no-console
//     res.sendStatus(400);
//   }
// };

// exports.deleteOne = async (req, res) => {
//   try {
//     const { movieId } = req.params;
//     const { userId } = req.body;
//     await Watchedlist.destroy({ userId, movieId });
//     res.sendStatus(200);
//   } catch (error) {
//     console.error('Error: ', error); // eslint-disable-line no-console
//     res.sendStatus(400);
//   }
// };
