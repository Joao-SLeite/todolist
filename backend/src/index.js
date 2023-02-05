const express = require('express');

const app = express();

app.get('/task', (request, response) => response.status(200).send('Olá mundo'));

app.listen(3333, () => console.log('Server ruinning on port 3333'));
