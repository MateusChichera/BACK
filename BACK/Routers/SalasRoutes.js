const SalasController = require('../Controller/SalasController');

const SalaC = new SalasController;
const express = require('express');
const router = express.Router();


router.get('/salas',SalaC.Obter);
router.post('/salas',SalaC.Inserir);
router.put('/salas/:id',SalaC.Atualizar);
router.delete('/salas/:id',SalaC.Excluir);




module.exports = router;