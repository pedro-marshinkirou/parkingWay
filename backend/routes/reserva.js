var express = require('express');
var router = express.Router();
var reservaController = require('../controlers/reservas');

router.get('/', reservaController.getReservas);
router.post('/', reservaController.createReserva);
router.get('/:id', reservaController.reservaGetone);
router.put('/:id', reservaController.reservaUpdate);
router.put('/func/:id', reservaController.reservaFUNCupdate);
router.put('/cancelar/:id', reservaController.cancelaReserva);

module.exports = router;