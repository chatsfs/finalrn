import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity,TextInput, AsyncStorage } from 'react-native';

class addDeck extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
    }
  }
  addDeck(){
    this.props.onTodoClick(this.state.nombre)
    this.props.screenProps.topNavigation.navigate('deck', {data: {
      title: this.state.nombre,
      questions: []
    }});
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(nombre)=>this.setState({nombre})}
          style={{padding: 4}}
          placeholder='Ingrese el nombre del deck...'
        />
        <TouchableOpacity
          onPress={this.addDeck.bind(this)}
          style={{backgroundColor: 'orange', padding: 10}}
        >
            <Text style={{color: 'white', textAlign: 'center'}}>Añadir al deck...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
addDeck.propTypes = {
  onTodoClick: PropTypes.func.isRequired
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
});
export default addDeck