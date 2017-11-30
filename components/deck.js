import React from 'react';
import { StyleSheet, Text, View, FlatList,Button } from 'react-native';

export default class deck extends React.Component {
  render() {
    let deck = this.props.navigation.state.params.data;
    return (
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
        <Button
          onPress={()=>this.props.navigation.navigate('addCard',{data: this.props.navigation.state.params.data})}
          title='AGREGAR CARTA'
        />
        <Button
          onPress={()=>this.props.navigation.navigate('addCard',{data: this.props.navigation.state.params.data})}
          title='SEGUIR CUESTIONARIO'
        />
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