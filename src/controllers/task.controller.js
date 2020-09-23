// GET http://localhost:3630/Task/ABC123
// POST http://localhost:3630/Task
// PUT http://localhost:3630/Task/:id

// {
//     "name": "Pedro",
//     "lastname": "Valdivieso",
//     "email": "email@gmail.com",
//     "password": "hola124"
// }


// Objetos de Express
// req -> la solicitud que esta haciendo el cliente
// res -> la respuesta que vamos a enviar al cliente
const TaskService = require('../services/task.service');
const TaskServiceInstance = new TaskService();

async function createTask(req, res, next) {
    try {
        const data = req.body;
        const result = await TaskServiceInstance.create(data);

        return res.json({
            ok: true,
            data: result
        });

    } catch (error) {
        next(error);
    }
}

async function updateTask(req, res, next) {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const result = await TaskServiceInstance.update(id, updatedData);

        return res.json({
            ok: true,
            data: result
        });

    } catch (error) {
        next(error);
    }
}

async function getAllTasksByUserId(req, res, next) {
    try {
        const userId = req.params.id
        const result = await TaskServiceInstance.getAllByUserId(userId);
        return res.json({
            ok: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
}

async function getTaskById(req, res, next) {
    try {
        const id = req.params.id;
        const result = await TaskServiceInstance.getById(id);

        return res.json({
            ok: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
}

async function deleteTask(req, res, next) {
    try {
        const id = req.params.id;
        const result = await TaskServiceInstance.delete(id);

        return res.json({
            ok: result,
            message: 'Tarea eliminado correctamente!'
        });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createTask,
    updateTask,
    getTaskById,
    getAllTasksByUserId,
    deleteTask
}