const db = require('../models');
const reservationModel = require('../models/reservation.model');
const media = db.media;

const MediaController = {};

//GROUP SEARCH
MediaController.getAll = async (req, res) => {
    try {
        const response = await media.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todos los soportes',
        });
    }
};

//INDIVIDUAL SEARCH
MediaController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await media.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar un soporte',
        });
    }
};

//CREATE MEDIA
MediaController.createMedia = async (req, res) => {
    try {
        const body = req.body.media;

        const mediaObj = {
            img1: body.img1,
            img2: body.img2,
            img3: body.img3,
        };

        Object.keys(body).forEach((property) => {
            if (!mediaObj[property]) {
                mediaObj[property] = body[property];
            }
        });

        const response = await media.create(mediaObj);

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar crear un soporte, compruebe que todo está correcto o inténtelo de nuevo en unos minutos.',
        });
    }
};

//MODIFY MEDIA
MediaController.modifyMedia = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const mediaModObj = {};

        Object.keys(body).forEach((property) => {
            mediaModObj[property] = body[property];
        });
        const result = await media.update(mediaModObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar modificar los medios, por favor compruebe que todo está bien o inténtelo de nuevo en unos minutos.',
        });
    }
};

//DELETE MEDIA
MediaController.deleteMedia = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await media.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar eliminar los archivos multimedia, compruebe que todo está bien o inténtelo de nuevo en unos minutos.',
        });
    }
};

// TODO: the crypto for the password, do the routes, put few seeders, test.

module.exports = MediaController;
