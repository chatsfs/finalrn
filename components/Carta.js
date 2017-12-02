import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, Animated } from 'react-native';
const { width, height } = Dimensions.get('window')
const realHeight = height - 86;
export default class card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: new Animated.Value(0),
      answer: '',
      answered: false,
      resultado: '',
      hint: ''
    }
  }
  takeAction() {
    if(this.props.last){
      clearLocalNotification().then(setLocalNotification)
    }
    if (this.state.answered) {
      this.props.siguiente();
    } else {
      Animated.timing(this.state.rotation, {
        toValue: 1,
      }).start(() => {
        let resultado = '';
        if (this.state.answer.length) {
          if (this.state.answer != this.props.question.answer) {
            //this.props.accumulate(0)
            resultado = 'Respuesta incorrecta! :('
          } else {
            this.props.accumulate(1)
            resultado = 'Respuesta correcta! :)'
          }
        } else {
          resultado = `La respuesta era: ${this.props.question.answer}`
        }
        this.setState({ answered: true, resultado })
      });
    }
  }
  review() {
    if (this.state.answer.length) {
      if (this.state.answer != this.props.question.answer) {
        resultado = 'Keept Trying :('
      } else {
        resultado = 'You just get it! :)'
      }
      this.setState({ hint: resultado })
    }
  }
  render() {
    let question = this.props.question;
    let rotationCara = this.state.rotation.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
    let rotationSello = this.state.rotation.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });
    let nextText = this.props.last ? 'Regresar' : 'Siguiente'
    return (
      <View style={{ height: realHeight, padding: 20, justifyContent: 'flex-end' }}>
        <TextInput
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
          placeholder='Respuesta...' style={{ padding: 5 }} />
        <View style={{ flex: 1 }}>
          <Animated.View
            style={[styles.card, { backgroundColor: 'white', transform: [{ rotateY: rotationCara }] }]}>
            <Text>{question.question}</Text>
            
          </Animated.View>
          <Animated.View
            style={[styles.card, { opacity: this.state.rotation, backgroundColor: 'green', transform: [{ rotateY: rotationSello }] }]}>
            <Text>{this.state.resultado}</Text>
          </Animated.View>

        </View>
        <Text style={{ textAlign: 'center' }}>{this.state.hint}</Text>
        {this.props.last && <View style={{ paddingTop: 20 }}>
          {this.state.resultado!==''&&<Text style={{textAlign:'center'}}>{(this.props.rightanswer/this.props.totalq)*100}%</Text>}
          <Button
            title='Volver a tomar cuestionario'
            onPress={this.props.rewind} />
        </View>}
        <View style={{ paddingTop: 10, paddingBottom: 40 }}>
        <Button
              title={this.state.answer.length ? 'Guess' : 'Escribe algo...'}
              onPress={this.review.bind(this)} />
          <Button
            title={!this.state.answered ? (this.state.answer.length ? 'Enviar' : 'Pedir respuesta') : nextText}
            onPress={this.takeAction.bind(this)} />
        </View>
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
  card: {
    position: 'absolute',
    top: 30,
    bottom: 30,
    left: 20,
    right: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});