// GET http://localhost:3630/Task/ABC123
// POST http://localhost:3630/Task
// PUT http://localhost:3630/Task/:id

// {
//     "name": "Pedro",
//     "lastname": "Valdivieso",
//     "email": "email@gmail.com",
//     "password": "hola124"
// }

const { Router } = require('express');
const { getAllTasksByUserId, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/task.controller');

const router = Router();

router.get('/user/:id', getAllTasksByUserId);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;