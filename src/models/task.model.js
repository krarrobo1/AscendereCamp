const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const TaskSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    title: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, enum: ['PENDIENTE', 'EN PROCESO', 'TERMINADA'], default: 'PENDIENTE' },
    startDate: { type: Date },
    endDate: { type: Date }
});

module.exports = mongoose.model('task', TaskSchema);