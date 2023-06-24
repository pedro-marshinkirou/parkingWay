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
}

export default reservasService;