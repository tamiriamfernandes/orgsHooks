import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Estrela from './Estrela';

export default function Estrelas({
  quantidade: quantidaAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidaAntiga);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={i}
          onPress={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
        />,
      );
    }

    return listaEstrelas;
  };

  return (
    <View style={estilos.viewEstrelas}>
      <RenderEstrelas />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewEstrelas: {
    flexDirection: 'row',
  },
});
