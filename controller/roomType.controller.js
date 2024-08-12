const db = require('../models');
const AuthMiddleware = require('../Middleware/auth.users');
const roomType = db.roomType;

const RoomTypeController = {};

//GROUP SEARCH
RoomTypeController.getAll = async (req, res) => {
    try {
        const response = await roomType.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todos los tipos de habitaciones',
        });
    }
};

//INDIVIDUAL SEARCH
RoomTypeController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await roomType.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar un tipo de habitación',
        });
    }
};

//CREATE ROOMTYPE
RoomTypeController.createRoomType = async (req, res) => {
    try {
        const body = req.body;
        const name = body.roomType.name;

        const response = await roomType.create({
            name,
        });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar crear un tipo de sala, compruebe que todo está correcto o inténtelo de nuevo en unos minutos.',
        });
    }
};

//MODIFY ROOMTYPE
RoomTypeController.modifyRoomType = async (req, res) => {
    try {
        const body = req.body.roomType;
        const id = req.params.id;
        const roomObj = {};

        Object.keys(body).forEach((property) => {
            roomObj[property] = body[property];
        });
        const result = await roomType.update(roomObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar modificar el tipo de rrom, por favor compruebe que todo está correcto o inténtelo de nuevo en unos minutos.',
        });
    }
};

//DELETE ROOMTYPE
RoomTypeController.deleteRoomType = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await roomType.destroy({ where: { id } });

        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar eliminar un tipo de sala. Compruebe que todo está correcto o inténtelo de nuevo en unos minutos.',
        });
    }
};

module.exports = RoomTypeController;
