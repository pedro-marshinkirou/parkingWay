var express = require('express');
var router = express.Router();
var reservaController = require('../controlers/reservas');

router.get('/', reservaController.getReservas);
router.post('/', reservaController.createReserva);
router.get('/:id', reservaController.reservaGetone);
router.put('/:id', reservaController.reservaUpdate);
router.put('/func/:id', reservaController.reservaFUNCupdate);
router.put('/cancelar/:id', reservaController.cancelaReserva);
router.get('/abertas/:id', reservaController.reservaGetabertas);
router.put('/confirma/:id', reservaController.confirmaReserva);
router.get('/confirmadas/:id', reservaController.reservaGetconfirmadas);
router.get('/canceladas/:id', reservaController.reservaGetcanceladas);
router.put('/encerra/:id', reservaController.encerraReserva);
router.get('/encerradas/:id', reservaController.reservaGetencerradas);

module.exports = router;