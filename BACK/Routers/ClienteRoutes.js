const ClienteController = require("../Controller/ClienteController");

const ClienteC = new ClienteController;
const express = require('express');
const router = express.Router();


router.get('/clientes',ClienteC.Obter);
router.get('/clientes/buscar/:cli_nome',ClienteC.Busca);
router.get('/clientes/:id',ClienteC.BuscaID);
router.post('/clientes',ClienteC.Inserir);
router.put('/clientes/:id',ClienteC.Atualizar);
router.delete('/clientes/:id',ClienteC.Excluir);
router.get('/clientes/cnpj/:cnpj',ClienteC.BuscarCNPJ);
module.exports =router;

