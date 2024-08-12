const express = require('express');

const AuthMiddleware = require('../Middleware/auth.users');
const ReservationController = require('../controller/reservation.controller');

const router = express.Router();

router.post('/', AuthMiddleware.isAdmin, ReservationController.getAll);

router.post('/user', AuthMiddleware.userIsAllowed, ReservationController.getAllbyUserId);

router.get('/rentedspace', AuthMiddleware.authToken, ReservationController.getAllbyRentedSpaceId);

router.get('/:id(\\d+$)', AuthMiddleware.userIsAllowed, ReservationController.getOnebyId);

router.post('/:id(\\d+$)', AuthMiddleware.authToken, ReservationController.doReservation);

router.put('/:id(\\d+$)', AuthMiddleware.userIsAllowed, ReservationController.modifyReservation);

router.delete('/:id(\\d+$)', AuthMiddleware.userIsAllowed, ReservationController.modifyReservation);

module.exports = router;
