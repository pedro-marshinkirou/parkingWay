import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, NavigationContainer } from '@react-navigation/native';

const HomeCliente = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {data} = route.params
  console.log(data.nome);

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCadastro = () => {
    navigation.navigate('Cadcliente');
  };

  const handlePerfil= () => {
    navigation.navigate('PerfilCliente', {data});
  };

  const handleReservar= () => {
    navigation.navigate('ReservaCliente', {data});
  };

  return (
    <View style={styles.page}>
      <View style={styles.formLogin}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.description}>Bem-vindo à página inicial!</Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleReservar}>
            <Text style={styles.btnText}>RESERVAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleCadastro}>
            <Text style={styles.btnText}>Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handlePerfil}>
            <Text style={styles.btnText}>Meu Perfil</Text>
          </TouchableOpacity>
          <View style={styles.buttonSpacer} />
          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btnText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  formLogin: {
    backgroundColor: '#dcdcdc',
    borderRadius: 7,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginBottom: 5,
  },
  title: {
    padding: 0,
    margin: 0,
    fontWeight: '500',
    fontSize: 28,
    color: '#000000',
  },
  description: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
  },
  btn: {
    backgroundColor: '#800080',
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10,
  },
  btn1: {
    backgroundColor: '#ffffff',
    borderRadius: 40,
    paddingVertical: 9,
    paddingHorizontal: 100,
    margin: 10,
    shadowColor: '#000',
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  btnText1: {
    color: '#800080',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonSpacer: {
    width: 10, // Espaço desejado entre os botões
  },
  link: {
    color: '#000000',
  },
};

export default HomeCliente;
