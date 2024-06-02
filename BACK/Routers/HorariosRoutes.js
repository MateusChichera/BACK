const HorariosController = require('../Controller/HorariosController');

const HorarioC = new HorariosController;
const express = require('express');
const router = express.Router();


router.get('/horarios',HorarioC.Obter);
router.get('/horarios/:id',HorarioC.ObterID);
router.post('/horarios',HorarioC.Inserir);
router.put('/horarios/:id',HorarioC.Atualizar);
router.delete('/horarios/:id',HorarioC.Excluir);

module.exports = router;