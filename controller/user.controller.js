const bcrypt = require('bcrypt'); 

const db = require('../models');
const AuthMiddleware = require('../Middleware/auth.users');
const user = db.user;

const UserController = {};

//GROUP SEARCH
UserController.getAll = async (req, res) => {
    try {
        const response = await user.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving users',
        });
    }
};

UserController.getAllUsersOwner = async (req, res) => {
    try {
        const response = await user.findAll({ where: { isOwner: true } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving owner users',
        });
    }
};

UserController.getAllUsersAdmin = async (req, res) => {
    try {
        const response = await user.findAll({ where: { isAdmin: true } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving admin users',
        });
    }
};

//INDIVIDUAL SEARCH
UserController.getOnebyId = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await user.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the id of a user',
        });
    }
};

//LOGIN
UserController.login = async (req, res) => {
    try {
        const body = req.body;
        const email = body.email;
        const password = body.password;

        const result = await user.findOne({ where: { email } });

        if (result) {
            // Comparar la contraseña ingresada con la encriptada
            const isPasswordValid = await bcrypt.compare(password, result.password);

            if (isPasswordValid) {
                const token = AuthMiddleware.generateAccessToken(email);

                const userInfo = {
                    id: result.id,
                    name: result.name,
                    surname: result.surname,
                    email: result.email,
                    isAdmin: result.isAdmin,
                    isOwner: result.isOwner,
                    token,
                };

                res.send(userInfo);
            } else {
                throw new Error('Invalid credentials');
            }
        } else {
            throw new Error('No user registered with those credentials');
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while trying to access, try again in few minutes',
        });
    }
};


//REGISTER
UserController.register = async (req, res) => {
    try {
        const body = req.body;

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(body.password, 10);

        const userObj = {
            name: body.name,
            surname: body.surname,
            email: body.email,
            age: body.age,
            phoneNumber: body.phoneNumber,
            password: hashedPassword, // Guardar la contraseña encriptada
            isAdmin: false,
            isOwner: false,
        };

        const result = await user.create(userObj);

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while trying to do the registration, try again in few minutes',
        });
    }
};

//MODIFY USER
UserController.modifyUser = async (req, res) => {
    try {
        const userBody = req.body;
        const id = req.params.id;
        const userObj = {};

        Object.keys(userBody).forEach((property) => {
            userObj[property] = userBody[property];
        });

        const result = await user.update(userObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to modify the user, please check everything is alright or try again after few minutes',
        });
    }
};

//DELETE USER
UserController.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await user.destroy({ where: { id } });

        res.status(200).send('');
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to delete the user, please check everything is alright or try again afetr few minutes',
        });
    }
};

module.exports = UserController;
