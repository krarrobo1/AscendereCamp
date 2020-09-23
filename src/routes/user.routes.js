// GET http://localhost:3630/user/:id
// POST http://localhost:3630/Task
// PUT http://localhost:3630/user/:id

// {
//     "name": "Pedro",
//     "lastname": "Valdivieso",
//     "email": "email@gmail.com",
//     "password": "hola124"
// }

const { Router } = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;