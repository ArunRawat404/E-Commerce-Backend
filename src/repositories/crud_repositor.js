const AppError = require("../utils/errors/app_error")
const { StatusCodes } = require("http-status-codes");

class CrudRepository {
    constructor(model) {
        this.model = model
    };

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            throw new AppError("Not able to create resource", StatusCodes.INTERNAL_SERVER_ERROR)
        }
    };

    async destroy(id) {
        try {
            const response = await this.model.findByIdAndDelete(id);
            if (!response) {
                throw new AppError("Not able to find the resource", StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            throw new AppError("Not able to delete resource", StatusCodes.INTERNAL_SERVER_ERROR)
        }
    };

    async get(id) {
        try {
            const response = await this.model.findById(id);
            if (!response) {
                throw new AppError("Not able to find the resource", StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            throw new AppError("Not able to delete resource", StatusCodes.INTERNAL_SERVER_ERROR)
        }
    };

    async getAll() {
        try {
            const response = await this.model.find();
            return response;
        } catch (error) {
            throw new AppError("Not able to delete resource", StatusCodes.INTERNAL_SERVER_ERROR)
        }
    };

    async update(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate(id, data);
            if (!response) {
                throw new AppError("Not able to find the resource", StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            throw new AppError("Not able to update resource", StatusCodes.INTERNAL_SERVER_ERROR)
        }
    };
};

module.exports = CrudRepository;