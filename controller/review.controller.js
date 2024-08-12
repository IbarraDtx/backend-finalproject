const db = require('../models');
const review = db.review;

const ReviewController = {};

//GROUP SEARCH
ReviewController.getAll = async (req, res) => {
    try {
        const response = await review.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todas las reseñas',
        });
    }
};

//INDIVIDUAL SEARCH
ReviewController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await review.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar una calificación',
        });
    }
};

ReviewController.getAllbyUserId = async (req, res) => {
    try {
        const userId = req.params.userid;

        const response = await review.findAll({ where: { userId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Se ha producido un error al recuperar todas las opiniones de un usuario',
        });
    }
};

//CREATE REVIEW
ReviewController.doReview = async (req, res) => {
    try {
        const body = req.body;
        const reservationId = body.reservationId;
        const rating = body.rating;
        const comment = body.comment;

        const response = await review.create({ reservationId, rating, comment });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar realizar una revisión, por favor compruebe que todo está bien o inténtelo de nuevo en unos minutos.',
        });
    }
};

//MODIFY REVIEW
ReviewController.modifyReview = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const reviewObj = {};

        Object.keys(body).forEach((property) => {
            reviewObj[property] = body[property];
        });

        const result = await review.update(reviewObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar modificar una reseña, compruebe que todo está bien o inténtelo de nuevo en unos minutos.',
        });
    }
};

//DELETE REVIEW
ReviewController.deleteReview = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await review.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Se ha producido un error al intentar eliminar una opinión, compruebe que todo está bien o inténtelo de nuevo en unos minutos.',
        });
    }
};

module.exports = ReviewController;
