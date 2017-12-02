import React from 'react';
import { StyleSheet, } from 'react-native';
import  addCard from './containers/addCard'
import  deck from './containers/deck'
import  cuestionario from './components/cuestionario'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification} from './utils/helper'
let store = createStore(reducer)
import tabNavigator from './components/tabNavigator'

const MainNavigator = StackNavigator({
  Home: {
    screen: tabNavigator,
  },
  deck: {
    screen: deck,
    navigationOptions: {
      headerTintColor: '#222',
      headerStyle: {
        backgroundColor: '#555',
      }
    }
  },
  addCard: {
    screen: addCard,
    navigationOptions: {
      headerTintColor: '#222',
      headerStyle: {
        backgroundColor: '#555',
      }
    }
  },
  cuestionario: {
    screen: cuestionario,
    navigationOptions: {
      headerTintColor: '#222',
      headerStyle: {
        backgroundColor: '#555',
      }
    }
  },
})

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
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
