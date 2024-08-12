const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const MediaController = require('../controller/media.controller');

const router = express.Router();

router.get('/', MediaController.getAll);

router.get('/:id(\\d+$)', MediaController.getOnebyId);

router.post('/', MediaController.createMedia);

router.put('/:id(\\d+$)', AuthMiddleware.userIsAllowed, MediaController.modifyMedia);

router.delete('/:id(\\d+$)', AuthMiddleware.userIsAllowed, MediaController.deleteMedia);

module.exports = router;
