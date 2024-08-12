const express = require('express');

const router = express.Router();

const HomeTypeRoutes = require('./routes/homeType.routes');
const MediaRoutes = require('./routes/media.routes');
const RentedSpaceRoutes = require('./routes/rentedSpace.routes');
const ReservationRoutes = require('./routes/reservation.routes');
const ReviewRoutes = require('./routes/review.routes');
const RoomTypeRoutes = require('./routes/roomType.routes');
const UserRoutes = require('./routes/user.routes');

router.use('/hometype', HomeTypeRoutes);
router.use('/media', MediaRoutes);
router.use('/rentedspace', RentedSpaceRoutes);
router.use('/reservation', ReservationRoutes);
router.use('/review', ReviewRoutes);
router.use('/roomtype', RoomTypeRoutes);
router.use('/user', UserRoutes);

module.exports = router;
