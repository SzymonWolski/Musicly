const express = require('express');
const router = express.Router();
const controller = require('../controllers/songController');

router.post('/', controller.createSong);
router.get('/', controller.getSongs);
router.get('/:id', controller.getSong);
router.put('/:id', controller.updateSong);
router.delete('/:id', controller.deleteSong);

module.exports = router;
