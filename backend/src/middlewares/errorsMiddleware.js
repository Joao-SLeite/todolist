const errors = (error, request, response, next) => {
    if (error) {
        return response
            .status(500)
            .send({ message: 'Erro ao tentar conectar ao servidor' });
    }
    next();
};
module.exports = { errors };
