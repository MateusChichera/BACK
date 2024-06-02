const PlanosController = require('../Controller/PlanosController');

const PlanosC = new PlanosController;
const express = require('express');
const router = express.Router();

router.get('/planos',PlanosC.Obter);
router.get('/planos/:id',PlanosC.ObterID);
router.post('/planos',PlanosC.Inserir);
router.put('/planos/:id',PlanosC.Atualizar);
router.delete('/planos/:id',PlanosC.Excluir);

module.exports = router;