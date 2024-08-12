const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const RoomTypeController = require('../controller/roomType.controller');

const router = express.Router();

router.get('/', RoomTypeController.getAll);

router.get('/:id(\\d+$)', RoomTypeController.getOnebyId);

router.post('/', AuthMiddleware.isAdmin, RoomTypeController.createRoomType);

router.put('/:id(\\d+$)', AuthMiddleware.isAdmin, RoomTypeController.modifyRoomType);

router.delete('/:id(\\d+$)', AuthMiddleware.isAdmin, RoomTypeController.deleteRoomType);

module.exports = router;
