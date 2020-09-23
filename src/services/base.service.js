class BaseService {
    constructor(model) {
        this.model = model;
    }

    async create(entity) {
        return await this.model.create(entity); // Respuesta
    }

    async getAll() {
        return await this.model.find();
    }

    async getById(id) {
        return await this.model.findById(id);
    }

    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return true;
    }

    async update(id, entity) {
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }
}

module.exports = BaseService;