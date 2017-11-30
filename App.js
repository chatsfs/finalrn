import React from 'react';
import { StyleSheet, } from 'react-native';
import  addCard from './containers/addCard'
import  deck from './containers/deck'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
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
})

export default class App extends React.Component {

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
