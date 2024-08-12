const express = require('express');
const AuthMiddleware = require('../Middleware/auth.users');
const RentedSpaceController = require('../controller/rentedSpace.controller');

const router = express.Router();

router.get('/', RentedSpaceController.getAll);

router.get('/all', AuthMiddleware.userIsAllowed, RentedSpaceController.getAllbyUserId);

router.get('/roomtype/:roomTypeId(\\d+$)', RentedSpaceController.getAllbyRoomTypeId);

router.get('/hometype/:homeTypeId(\\d+$)', RentedSpaceController.getAllbyHomeTypeId);

router.get('/media/:mediaTypeId(\\d+$)', RentedSpaceController.getAllbyMediaId);

router.get('/:id(\\d+$)', RentedSpaceController.getOnebyId);

router.post('/', RentedSpaceController.createRentedSpace);

router.put('/modify', AuthMiddleware.isOwner, AuthMiddleware.isAdmin, RentedSpaceController.modifyRentedSpace);

router.delete('/delete', AuthMiddleware.isOwner, AuthMiddleware.isAdmin, RentedSpaceController.deleteRentedSpace);

module.exports = router;
