const getAll = (request, response) => {
    return response.status(200).json({ message: 'Controller funcionando' });
};

module.exports = {
    getAll,
};
