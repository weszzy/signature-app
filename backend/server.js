const express = require('express');
const cors = require('cors');
const { readData, writeData } = require('./utils/db'); // Importe as funções aqui

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/signatures', require('./routes/signatures'));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});