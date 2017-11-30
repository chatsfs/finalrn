import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { deckL } from '../App'
export default class deckShelf extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {Object.keys(this.props.decks).map(key => {
                    const { title } = this.props.decks[key]
                    return (
                        <TouchableOpacity
                            key={key}
                            style={{backgroundColor: 'blue', margin: 10, padding: 10, margin: 10}}
                            onPress={() => this.props.screenProps.topNavigation.navigate(
                            'deck',
                            { data: this.props.decks[key] }
                        )}>
                            <Text style={{color: 'white'}}> {title}</Text>
                        </TouchableOpacity>
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
        justifyContent: 'center',
    },
});