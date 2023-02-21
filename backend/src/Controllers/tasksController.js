const tasksModel = require('../models/tasksModel');

const getAll = async (request, response) => {
    try {
        const tasks = await tasksModel.getAll();
        return response.status(200).json(tasks);
    } catch (error) {
        return response
            .status(500)
            .json({ message: 'Erro ao conectar com o servidor' });
    }
};
const createTask = async (request, response) => {
    try {
        const createdTask = await tasksModel.createTask(request.body);
        return response.status(201).json(createdTask);
    } catch (error) {
        return response
            .status(500)
            .json({ message: 'Erro ao conectar com o servidor' });
    }
};

const deleteTask = async (request, response) => {
    try {
        const { id } = request.params;
        await tasksModel.deleteTask(id);
        return response.status(204).json();
    } catch (error) {
        return response
            .status(500)
            .json({ message: 'Erro ao conectar com o servidor' });
    }
};

const updateTask = async (request, response) => {
    try {
        const { id } = request.params;
        await tasksModel.updateTask(id, request.body);
        return response.status(204).json();
    } catch (error) {
        return response
            .status(500)
            .json({ message: 'Erro ao conectar com o servidor' });
    }
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};
