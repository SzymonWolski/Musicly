const Song = require('../models/song');

exports.createSong = async (req, res) => {
  const song = await Song.create(req.body);
  res.json(song);
};

exports.getSongs = async (req, res) => {
  const songs = await Song.findAll();
  res.json(songs);
};

exports.getSong = async (req, res) => {
  const song = await Song.findByPk(req.params.id);
  res.json(song);
};

exports.updateSong = async (req, res) => {
  await Song.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Song updated." });
};

exports.deleteSong = async (req, res) => {
  await Song.destroy({ where: { id: req.params.id } });
  res.json({ message: "Song deleted." });
};
