const express = require('express');
const router = express();

const TaskRoutes = require('./task.routes');
const UserRoutes = require('./user.routes');

router.use('/user', UserRoutes);
router.use('/task', TaskRoutes);

module.exports = router;