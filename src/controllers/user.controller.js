// GET http://localhost:3630/user/ABC123
// POST http://localhost:3630/user
// PUT http://localhost:3630/user/:id

// {
//     "name": "Pedro",
//     "lastname": "Valdivieso",
//     "email": "email@gmail.com",
//     "password": "hola124"
// }


// Objetos de Express
// req -> la solicitud que esta haciendo el cliente
// res -> la respuesta que vamos a enviar al cliente
const UserService = require('../services/user.service');
const UserServiceInstance = new UserService();

async function createUser(req, res, next) {
    try {
        const data = req.body;
        const result = await UserServiceInstance.create(data);

        return res.json({
            ok: true,
            data: result
        });

    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const result = await UserServiceInstance.update(id, updatedData);

        return res.json({
            ok: true,
            data: result
        });

    } catch (error) {
        next(error);
    }
}

async function getAllUsers(req, res, next) {
    try {
        const result = await UserServiceInstance.getAll();

        return res.json({
            ok: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
}

async function getUserById(req, res, next) {
    try {
        const id = req.params.id;
        const result = await UserServiceInstance.getById(id);

        return res.json({
            ok: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        const id = req.params.id;
        const result = await UserServiceInstance.delete(id);

        return res.json({
            ok: result,
            message: 'Usuario eliminado correctamente!'
        });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    updateUser,
    getUserById,
    getAllUsers,
    deleteUser
}