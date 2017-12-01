import React from 'react';
import { StyleSheet, Text, View, FlatList,Button } from 'react-native';

export default class deck extends React.Component {
  render() {
    let deck = this.props.decks[this.props.navigation.state.params.data.title];
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
        <View style={{marginVertical: 10}}>
          <Button
            onPress={()=>this.props.navigation.navigate('addCard',{data: deck})}
            title='AGREGAR CARTA'
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Button
            onPress={()=>this.props.navigation.navigate('cuestionario',{data: deck})}
            title='SEGUIR CUESTIONARIO'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});