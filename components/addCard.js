import React from 'react';
import { StyleSheet, Text, ScrollView, TextInput, KeyboardAvoidingView,TouchableOpacity } from 'react-native';

export default class addCard extends React.Component {
    state = {
        question: '',
        answer: '',
    }
    save = () => {
        this.props.addCard(this.state.question,this.state.answer,this.props.navigation.state.params.data)
        this.clearFields();
    }
    clearFields = () => {
        this.setState({
            question: '',
            answer: '',
        })
        this._questionInput.focus();
    }
    render() {
        let isEmpty = !(this.state.question.length&&this.state.answer.length);
        return (
            <KeyboardAvoidingView style={styles.container}>
                <TextInput
                    ref={component => this._questionInput = component}
                    placeholder="Enter Question"
                    autoFocus={true}
                    multiline={true}
                    value={this.state.question}
                    style={{padding: 5}}
                    onChangeText={(question) => this.setState({ question })}
                />

                <TextInput
                    ref={component => this._answerInput = component}
                    placeholder="Enter Answer"
                    multiline={true}
                    value={this.state.answer}
                    style={{padding: 5}}
                    onChangeText={(answer) => this.setState({ answer })}
                />
                <TouchableOpacity
                    onPress={() => { this.save() }}
                    disabled={isEmpty}
                    style={{backgroundColor: 'red'}}
                >
                    <Text style={[{textAlign: 'center'},isEmpty ? { backgroundColor: '#bbb', color: 'gray' } : {color: 'white'}]}>Save {'&'} Add Another</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
});