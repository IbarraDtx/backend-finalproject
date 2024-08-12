const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const UserController = require('../controller/user.controller');

const router = express.Router();

router.post('/', AuthMiddleware.authToken, AuthMiddleware.isAdmin, UserController.getAll);

router.post('/owner', AuthMiddleware.authToken, AuthMiddleware.isAdmin, UserController.getAllUsersOwner);

router.post('/admin', AuthMiddleware.authToken, AuthMiddleware.isAdmin, UserController.getAllUsersAdmin);

router.get('/:id(\\d+$)', AuthMiddleware.authToken, UserController.getOnebyId);

router.post('/login', UserController.login);

router.post('/register', UserController.register);

router.post('/create', AuthMiddleware.isAdmin, UserController.register);

router.put('/:id(\\d+$)', AuthMiddleware.authToken, AuthMiddleware.userIsAllowed, UserController.modifyUser);

router.delete('/:id(\\d+$)', AuthMiddleware.authToken, AuthMiddleware.userIsAllowed, UserController.deleteUser);

module.exports = router;
