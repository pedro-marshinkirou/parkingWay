import axios from 'axios';

var reservasService = {

  // método para cadastrar um funcionário
  createReserva: async (Eftreserva) => {
    console.log( typeof Eftreserva);
    console.log(Eftreserva);
    var ReservaUnica = await axios.post(`http://10.0.2.2:5000/apireserva/`, Eftreserva);
    return ReservaUnica;
  },

  getReservaAbertabyID: async (id) => {
    console.log(id +'.......A3');
    var reservaAbt = await axios.get(`http://10.0.2.2:5000/apireserva/abertas/`+ id);
    console.log(reservaAbt +'........A4');
    return reservaAbt;
  },

  getCancelarReservabyID: async (id) => {
    console.log(id +'.......A3');
    var reservacanc = await axios.put(`http://10.0.2.2:5000/apireserva/cancelar/`+ id);
    console.log(reservacanc +'........A4');
    return reservacanc;
  },

  getConfirmarReservabyID: async (id) => {
    console.log(id +'.......A3');
    var reservaconf = await axios.put(`http://10.0.2.2:5000/apireserva/confirma/`+ id);
    console.log(reservaconf +'........A4');
    return reservaconf;
  },

  getReservaCanceladaBYID: async (id) => {
    console.log(id +'.......A3');
    var reservascanc = await axios.get(`http://10.0.2.2:5000/apireserva/canceladas/`+ id);
    console.log(reservascanc +'........A4');
    return reservascanc;
  },

  getReservasConfirmadasBYID: async (id) => {
    console.log(id +'.......A3');
    var reservasconfirmdas = await axios.get(`http://10.0.2.2:5000/apireserva/confirmadas/`+ id);
    console.log(reservasconfirmdas +'........A4');
    return reservasconfirmdas;
  },

  getIniciarReservabyID: async (id) => {
    console.log(id +'.......A3');
    var reservaInit = await axios.put(`http://10.0.2.2:5000/apireserva/iniciar/`+ id);
    console.log(reservaInit +'........A4');
    return reservaInit;
  },

  getReservasIniciadasBYID: async (id) => {
    console.log(id +'.......A3');
    var reservasInitiadas = await axios.get(`http://10.0.2.2:5000/apireserva/iniciadas/`+ id);
    console.log(reservasInitiadas +'........A4');
    return reservasInitiadas;
  },

}

export default reservasService;