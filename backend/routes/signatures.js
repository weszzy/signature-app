const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/db'); // Importe as funções aqui

router.get('/', (req, res) => {
    const db = readData();
    res.json(db.users);
});

router.post('/', (req, res) => {
    const db = readData();
    const newUser = {
        id: db.users.length + 1,
        ...req.body
    };
    db.users.push(newUser);
    writeData(db);
    res.json({ message: 'Assinatura salva com sucesso!', user: newUser });
});

module.exports = router;