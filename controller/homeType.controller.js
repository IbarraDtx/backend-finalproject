const db = require('../models');
const homeType = db.homeType;
const user = db.user;

const HomeTypeController = {};

//GROUP SEARCH
HomeTypeController.getAll = async (req, res) => {
    try {
        const response = await homeType.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todos los tipos de vivienda',
        });
    }
};

//INDIVIDUAL SEARCH
HomeTypeController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await homeType.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar un tipo de vivienda',
        });
    }
};

//CREATE HOMETYPE
HomeTypeController.createHomeType = async (req, res) => {
    try {
        const body = req.body;
        const name = body.home.name;

        const response = await homeType.create({ name });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar crear un tipo de casa, por favor, compruebe que todo está bien o vuelva en unos minutos.',
        });
    }
};

//MODIFY HOMETYPE
HomeTypeController.modifyHomeType = async (req, res) => {
    try {
        const body = req.body.home;
        const id = req.params.id;
        const homeObj = {};

        Object.keys(body).forEach((property) => {
            homeObj[property] = body[property];
        });

        const result = await homeType.update(homeObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar modificar los datos de inicio, por favor compruebe que todo está bien o inténtelo de nuevo en unos minutos.',
        });
    }
};

//DELETE HOMETYPE
HomeTypeController.deleteHomeType = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await homeType.destroy({ where: { id } });

        res.status(200).send();
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar eliminar el tipo de casa, por favor compruebe que todo está bien o inténtelo de nuevo en unos minutos.',
        });
    }
};

module.exports = HomeTypeController;
