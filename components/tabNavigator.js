
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import  deckShelf  from '../containers/deckShelf'
import  addDeck from '../containers/addDeck'
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
      activeTintColor: Platform.OS === 'ios' ? 'white' :'white',
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
export default class tabNavigator extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <View style={{paddingTop: 24, flex: 1, backgroundColor: '#555'}}>
                <Tabs screenProps={{topNavigation: this.props.navigation}}/>
            </View>
        )
    }
}

