const db = require('../models');
const rentedSpace = db.rentedSpace;
const user = db.user;

const RentedSpaceController = {};

//GROUP SEARCH
RentedSpaceController.getAll = async (req, res) => {
    try {
        const response = await rentedSpace.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todas las plazas alquiladas',
        });
    }
};

RentedSpaceController.getAllbyUserId = async (req, res) => {
    try {
        const userId = req.params.userid;

        const response = await rentedSpace.findAll({ where: { userId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar los propietarios de los espacios alquilados.',
        });
    }
};

RentedSpaceController.getAllbyRoomTypeId = async (req, res) => {
    try {
        const roomTypeId = req.params.roomTypeId;

        const response = await rentedSpace.finAll({ where: { roomTypeId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todos los tipos de habitaciones del espacio alquilado.',
        });
    }
};

RentedSpaceController.getAllbyHomeTypeId = async (req, res) => {
    try {
        const homeTypeId = req.params.homeTypeId;

        const response = await rentedSpace.finAll({ where: { homeTypeId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todos los tipos de vivienda del espacio alquilado',
        });
    }
};

RentedSpaceController.getAllbyMediaId = async (req, res) => {
    try {
        const mediaId = req.params.mediaId;

        const response = await rentedSpace.findAll({ where: { mediaId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todos los soportes del espacio alquilado',
        });
    }
};

//INDIVIDUALSEARCH
RentedSpaceController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await rentedSpace.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar el espacio alquilado',
        });
    }
};

//CREATE RENTEDSPACE
RentedSpaceController.createRentedSpace = async (req, res) => {
    try {
        const body = req.body.rentedSpace;
        const userId = req.body.userId;
        const homeTypeId = body.homeTypeId;
        const roomTypeId = body.roomTypeId;
        const mediaId = body.mediaId;
        const title = body.title;
        const maxPersons = body.maxPersons;
        const numBedrooms = body.numBedrooms;
        const numBathrooms = body.numBathrooms;
        const description = body.description;
        const address = body.address;
        const tv = body.tv;
        const kitchen = body.kitchen;
        const airconditioner = body.airconditioner;
        const heating = body.heating;
        const internet = body.internet;
        const price = body.price;
        const publishedAt = body.publishedAt;

        const responseRented = await rentedSpace.create({
            userId,
            homeTypeId,
            roomTypeId,
            mediaId,
            title,
            maxPersons,
            numBedrooms,
            numBathrooms,
            description,
            address,
            tv,
            kitchen,
            airconditioner,
            heating,
            internet,
            price,
            publishedAt,
        });

        await user.update({ isOwner: true }, { where: { id: userId } });

        res.send({ id: responseRented.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar crear un espacio de alquiler, compruebe que todo está correcto o inténtelo de nuevo en unos minutos.',
        });
    }
};

//MODIFY RENTEDSPACE
RentedSpaceController.modifyRentedSpace = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const spaceObj = {};

        Object.keys(body).forEach((property) => {
            spaceObj[property] = body[property];
        });

        const result = await rentedSpace.update(spaceObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar modificar un espacio de alquiler, compruebe que todo está correcto o inténtelo de nuevo en unos minutos.',
        });
    }
};

//DELETE RENTEDSPACE
RentedSpaceController.deleteRentedSpace = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await rentedSpace.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar borrar el espacio alquilado, por favor compruebe que todo está bien o inténtelo de nuevo en unos minutos.',
        });
    }
};

module.exports = RentedSpaceController;
