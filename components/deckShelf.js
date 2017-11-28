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