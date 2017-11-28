import React from 'react';
import { StyleSheet, Text, View,StatusBar,Platform } from 'react-native';
import  deckShelf  from './components/deckShelf'
import  addDeck from './components/addDeck'
import  deck from './components/deck'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export function deckL(){
  return {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
}

function StatusBarT ({backgroundColor, ...props}){
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
const Tabs = TabNavigator({
  deckShelf: {
    screen: deckShelf,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  addDeck: {
    screen: addDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#555' :'#555',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? '#555' : '#555',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
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
      <MainNavigator/>
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
