const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sutherland:gbUNh28zi6NQO75n@zenovia.ylzqyxn.mongodb.net/?retryWrites=true', { useNewUrlParser: true});

const ReservaSchema = new mongoose.Schema({

    data:          { type: Date, default: Date.now(), },
    horaInicio:    { type: Number },
    horaFinal:     { type: Number },
    funcionario:   { type: mongoose.Schema.Types.ObjectId, ref: "FuncioModel", require: true, },
    cliente:       { type: mongoose.Schema.Types.ObjectId, ref: "ClienteModel", require: true, },
    nomeEstac:     { type: String, required: true },
    endereco:      { type: String, required: true },
    localInicial:  { type: String },
    localFinal:    { type: String },
    status:        { type: String, required: true },
    valorVaga:     { type: Number, required: true },
    tempo:         { type: Number },
    valorFinal:    { type: Number },
    tipoVaga:      { type: String, required: true },
    pagConfirm:    { type: String },
});

const ReservaModel = mongoose.model("reservas", ReservaSchema);

module.exports = {ReservaModel};
