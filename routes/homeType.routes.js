const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const HomeTypeController = require('../controller/homeType.controller');

const router = express.Router();

router.get('/', HomeTypeController.getAll);

router.get('/:id(\\d+$)', HomeTypeController.getOnebyId);

router.post('/', AuthMiddleware.authToken, AuthMiddleware.isAdmin, HomeTypeController.createHomeType);

router.put('/:id(\\d+$)', AuthMiddleware.authToken, AuthMiddleware.isAdmin, HomeTypeController.modifyHomeType);

router.delete('/:id(\\d+$)', AuthMiddleware.authToken, AuthMiddleware.isAdmin, HomeTypeController.deleteHomeType);

module.exports = router;
