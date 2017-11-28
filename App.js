import React from 'react';
import { StyleSheet, Text, View,StatusBar,Platform } from 'react-native';
import  addDeck from './components/addDeck'
import  deck from './components/deck'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
let store = createStore(reducer)
import tabNavigator from './components/tabNavigator'
function StatusBarT ({backgroundColor, ...props}){
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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
  }
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
