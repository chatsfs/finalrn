import React from 'react';
import { StyleSheet, Text, View, TextInput,Dimensions, Button,Animated } from 'react-native';
const {width,height} = Dimensions.get('window')
const realHeight = height-56;
export default class card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rotation: new Animated.Value(0),
      answer: '',
      answered: false,
      resultado: '',
    }
  }
  takeAction(){
    if(this.state.answered){
      this.props.siguiente();
    }else{
      Animated.timing(this.state.rotation,{
        toValue: 1,
      }).start(()=>{
        let resultado = '';
        if(this.state.answer.length){
          if(this.state.answer!=this.props.question.answer){
            resultado = 'Respuesta incorrecta! :('
          }else{
            resultado = 'Respuesta correcta! :)'
          }
        }else{
          resultado = `La respuesta era: ${this.props.question.answer}`
        }
        this.setState({answered: true, resultado})
      });
    }
  }
  render() {
    let question = this.props.question;
    let rotationCara = this.state.rotation.interpolate({inputRange: [0,1],outputRange: ['0deg','180deg']});
    let rotationSello = this.state.rotation.interpolate({inputRange: [0,1],outputRange: ['180deg','360deg']});
    return (
      <View style={{height: realHeight, padding: 20,justifyContent: 'flex-end'}}>
        <TextInput
          onChangeText={(answer)=>this.setState({answer})}
          value={this.state.answer}
          placeholder='Respuesta...' style={{padding: 5}}/>
        <View style={{flex: 1}}>
          <Animated.View
            style={[styles.card,{backgroundColor: 'red', transform:[{rotateY: rotationCara}]}]}>
            <Text>{question.question}</Text>
          </Animated.View>
          <Animated.View
            style={[styles.card,{opacity: this.state.rotation, backgroundColor: 'green', transform:[{rotateY: rotationSello}]}]}>
            <Text>{this.state.resultado}</Text>
          </Animated.View>
        </View>
        <View style={{paddingTop: 20}}>
          <Button
            title={!this.state.answered?(this.state.answer.length?'enviar':'pedir respuesta'):'siguiente'}
            onPress={this.takeAction.bind(this)}/>
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