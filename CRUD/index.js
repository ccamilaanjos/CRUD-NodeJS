const express = require('express');

const server = express();

server.use(express.json());

const item = [];

// Retornar um item
server.get('/item/:index', (req, res) => {
    const { index } = req.params;

    return res.json(item
[index]);
});

// Retornar todos os itens
server.get('/item', (req, res) => {
    return res.json(item
);
});

// Criar novo item
server.post('/item', (req, res) => {
    const { name } = req.body;
    item
.push(name);

    return res.json(item
);
});

// Atualizar item
server.put('/item/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    item
[index] = name;

    return res.json(item
);
});

// Deletar item
server.delete('/item/:index', (req, res) => {
    const { index } = req.params;

    item
.splice(index, 1);
    return res.json({message: "Item excluído."});
});

server.listen(3010);