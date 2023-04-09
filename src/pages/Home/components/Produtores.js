import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {loadingProdutores} from '../../../services/loadingData';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

function Produtores({topo: Topo}) {
  const [titulo, lista] = useProdutores();

  const topoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtor {...item} />}
      ListHeaderComponent={topoLista}
      keyExtractor={({nome}) => nome}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
export default Produtores;
