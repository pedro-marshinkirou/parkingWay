import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadcliente from './src/paginas/usuario';
import Login from './src/paginas/login';
import Cadfuncio from './src/paginas/funcionario';
import Sublogin from './src/paginas/sublogin';
import Estacionamento from './src/paginas/estacionamento';
import HomeCliente from './src/paginas/homeCliente';
import HomeFuncionario from './src/paginas/homeFuncionario';
import EstacFunc from './src/paginas/estacionamentoFuncionario';
import PerfilFunc from './src/paginas/perfilFuncionario';
import PerfilCliente from './src/paginas/perfilCliente';
import EditarFunc from './src/paginas/editarFuncionario';
import EditarCliente from './src/paginas/editarCliente';
import EditarEstacionamento from './src/paginas/editarEstacionamento';
import ReservaCliente from './src/paginas/ReservaCliente';
import MapaInicial from './src/paginas/mapa';
import EfetuarReserva from './src/paginas/confirmarReserva';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Sublogin" component={Sublogin} />
        <Stack.Screen name="Cadfuncio" component={Cadfuncio} />
        <Stack.Screen name="Cadcliente" component={Cadcliente} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeFuncionario" component={HomeFuncionario} />
        <Stack.Screen name="Estacionamento" component={Estacionamento} />
        <Stack.Screen name="HomeCliente" component={HomeCliente} />
        <Stack.Screen name="EstacFunc" component={EstacFunc} />
        <Stack.Screen name='PerfilFunc' component={PerfilFunc}/>
        <Stack.Screen name='PerfilCliente' component={PerfilCliente}/>
        <Stack.Screen name='EditarFunc' component={EditarFunc}/>
        <Stack.Screen name='EditarCliente' component={EditarCliente}/>
        <Stack.Screen name='EditarEstacionamento' component={EditarEstacionamento}/>
        <Stack.Screen name='ReservaCliente' component={ReservaCliente}/>
        <Stack.Screen name='MapaInicial' component={MapaInicial}/>
        <Stack.Screen name='EfetuarReserva' component={EfetuarReserva}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
