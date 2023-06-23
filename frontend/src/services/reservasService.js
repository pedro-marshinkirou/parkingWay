import axios from 'axios';

var reservasService = {

  // método para cadastrar um funcionário
  createReserva: async (Eftreserva) => {
    console.log( typeof Eftreserva);
    console.log(Eftreserva);
    var ReservaUnica = await axios.post(`http://10.0.2.2:5000/apireserva/`, Eftreserva);
    return ReservaUnica;
  },

}

export default reservasService;