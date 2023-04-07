import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import logo from '../../../assets/logo.png';
import {loadingTopo} from '../../../services/loadingData';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    }
  }

  refreshTopo() {
    const response = loadingTopo();
    this.setState({topo: response});
  }

  componentDidMount() {
    this.refreshTopo();
  }

  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
