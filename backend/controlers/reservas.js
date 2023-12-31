const Reserva = require("../models/reservas");
mongoose = require("mongoose");

exports.createReserva = async (req, res) => {  
    try{ 
        console.log(req)
              var { reserva } = req.body;

                var reserva = await Reserva.ReservaModel.create(req.body)
                    .catch((err) => console.log(err.messsage));
                if (!reserva){
                    return res.status(400).json({ message: "Erro ao cadastrar Reserva" });
                }
                res.status(201).json({
                    messsage: "Reserva cadastrado com sucesso",
                        Reserva: {
                        id: reserva._id,
                        horaInicio,
                        horaFinal,
                        funcionario,
                        cliente,
                        estacionamento,
                        nomeEstac,
                        endereco,
                        telCliente,
                        nomeCliente,
                        placa,
                        modelo,
                        localInicial,
                        localFinal,
                        status,
                        valorVaga,
                        tempo,
                        valorFinal,
                        tipoVaga,
                        pagConfirm
                    },
                });
            } catch (err){
                res.status(500).json({ message: err.message})
            }
            },
exports.getReservas = async (req, res) => {
            try{
                var Reservas = await Reserva.ReservaModel.find();

                if(Reservas.length === 0){
                    return res.status(400)
                    .json({message: "não há Reserva cadastrados"});
                }

                res.json(Reservas);
            } catch (err) {
                res.status(500)
                .json({message: err.message});
            }
        },
exports.reservaGetone = async (req, res) => {
           try{
                const id = req.params.id;
                const reservas = await Reserva.ReservaModel.findById(id);
                console.log(reservas);
                res.json(reservas);
           } catch (err) {
            res.status(500)
            .json({message: err.message});
            }
        },
exports.reservaUpdate = async (req, res) => {
            try{
                id = req.params.id;
                await Reserva.ReservaModel.findByIdAndUpdate(id,req.body);
                res.json({message: "Dados atualizados com sucesso"});
            } catch (err) {
                res.status(500)
                .json({message: err.message});
                }
            },
exports.reservaFUNCupdate = async (req, res) => {
            try{
                id = req.params.id;
                await Reserva.ReservaModel.findOneAndUpdate({funcionario: id},req.body);
                res.json({message: "Dados atualizados com sucesso"});
            } catch (err) {
                res.status(500)
                .json({message: err.message});
                }
            },
exports.cancelaReserva = async (req, res) => {   
            try {
                id = req.params.id
                console.log(id);
                res.status(201).json(await Reserva.ReservaModel.findByIdAndUpdate(id,{ status: 'C' } ));
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
            }
exports.reservaCLIENTEUpdate = async (req, res) => {
            try{
                id = req.params.id;
                await Reserva.ReservaModel.findOneAndUpdate({cliente: id},req.body);
                res.json({message: "Dados atualizados com sucesso"});
            } catch (err) {
                res.status(500)
                .json({message: err.message});
                }
            }