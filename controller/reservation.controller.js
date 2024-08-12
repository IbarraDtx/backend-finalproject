const db = require('../models');
const reservation = db.reservation;

const ReservationController = {};

//GROUP SEARCH
ReservationController.getAll = async (req, res) => {
    try {
        const response = await reservation.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar las reservas',
        });
    }
};

ReservationController.getAllbyUserId = async (req, res) => {
    try {
        const userId = req.body.userId;

        const response = await reservation.findAll({ where: { userId } });

        res.send(response);
    } catch (error) {
        console.log('🚀 ~ file: reservation.controller.js:27 ~ ReservationController.getAllbyUserId= ~ error', error);
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todas las reservas de un usuario',
        });
    }
};

ReservationController.getAllbyRentedSpaceId = async (req, res) => {
    try {
        const rentedSpaceId = req.params.rentedSpaceid;

        const response = await reservation.findAll({ where: { rentedSpaceId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todas las reservas de un espacio',
        });
    }
};

//INDIVIDUAL SEARCH
ReservationController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await reservation.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'se ha producido un error al recuperar el id de una reserva',
        });
    }
};

//CREATE RESERVATION
ReservationController.doReservation = async (req, res) => {
    try {
        const body = req.body;
        const userId = body.userId;
        const rentedSpaceId = body.rentedSpaceId;
        const startDate = body.startDate;
        const endDate = body.endDate;
        const price = body.price;

        const response = await reservation.create({ userId, rentedSpaceId, startDate, endDate, price, total });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar realizar una reserva, compruebe que todo está correcto o inténtelo de nuevo pasados unos minutos.',
        });
    }
};

//MODIFY RESERVATION
ReservationController.modifyReservation = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const reservationObj = {};

        Object.keys(body).forEach((property) => {
            reservationObj[property] = body[property];
        });
        const result = await reservation.update(reservationObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar modificar una reserva, compruebe que todo está correcto o inténtelo de nuevo pasados unos minutos.',
        });
    }
};

//DELETE RESERVATION
ReservationController.deleteReservation = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await reservation.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar eliminar una reserva, compruebe que todo está correcto o inténtelo de nuevo pasados unos minutos.',
        });
    }
};

module.exports = ReservationController;
