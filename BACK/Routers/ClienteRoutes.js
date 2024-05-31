const ClienteController = require("../Controller/ClienteController");

const ClienteC = new ClienteController;
const express = require('express');
const router = express.Router();


router.get('/clientes',ClienteC.Obter);
router.get('/clientes/:id',ClienteC.Busca);
router.post('/clientes',ClienteC.Inserir);
router.put('/clientes',ClienteC.Atualizar);
router.delete('/clientes/:id',ClienteC.Excluir);
router.get('/clientes/cnpj/:cnpj',ClienteC.BuscarCNPJ);
module.exports =router;

