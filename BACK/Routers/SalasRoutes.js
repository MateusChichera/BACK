const SalasController = require('../Controller/SalasController');

const SalaC = new SalasController;
const express = require('express');
const router = express.Router();


router.get('/salas',SalaC.Obter);



module.exports = router;