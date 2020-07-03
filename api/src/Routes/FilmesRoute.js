'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../Controller/FilmesController');

router.get('/', controller.get);
router.get('/:id', controller.getId);
router.post('/', controller.post);
router.delete('/:id', controller.delete);
router.put('/:id', controller.put);

module.exports = router;