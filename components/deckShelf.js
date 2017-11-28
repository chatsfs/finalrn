import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { deckL } from '../App'
export default class deckShelf extends React.Component {
    state = {
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
    render() {
        return (
            <View style={styles.container}>
                {Object.keys(this.state).map(key => {
                    const { title } = this.state[key]
                    return (

                        <View key={key} style={{ width: '50%' }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(
                                'deck',
                                { entryId: key }
                            )}>
                                <Text> {title}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
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