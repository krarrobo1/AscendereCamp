const BaseService = require('./base.service');
const TaskModel = require('../models/task.model');

class TaskService extends BaseService {
    constructor() {
        super(TaskModel);
    }
    async getAllByUserId(userId) {
        if (!userId) {
            const error = new Error();
            error.message = 'Se debe especificar el Id del usuario';
            error.status = 400;
            throw error;
        }
        const tasks = await TaskModel.find({
            user: userId
        }).exec();

        return tasks
    }
}

module.exports = TaskService;