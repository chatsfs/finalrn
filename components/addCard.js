import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

export default class addCard extends React.Component {
    state = {
        question: '',
        answer: '',
    }
    save = () => {
        this.clearFields();
    }
    clearFields = () => {
        this._answerInput.clearText();
        this._questionInput.clearText();
        this._questionInput.setFocus();
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <TextField
                    ref={component => this._questionInput = component}
                    placeholder="Enter Question"
                    autoFocus={true}
                    multiline={true}
                    value={this.state.question}
                    onChangeText={(question) => this.setState({ question })}
                />

                <TextField
                    ref={component => this._answerInput = component}
                    placeholder="Enter Answer"
                    multiline={true}
                    value={this.state.answer}
                    onChangeText={(answer) => this.setState({ answer })}
                />
                <TouchableOpacity
                    onPress={() => { this.save() }}
                    disabled={isEmpty}
                >
                    <BtnText style={isEmpty ? { backgroundColor: lightGray, color: gray } : {}}>Save & Add Another</BtnText>
                </TouchableOpacity>

            </KeyboardAvoidingView>
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