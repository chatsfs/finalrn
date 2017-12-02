import React from 'react';
import { StyleSheet, View, ScrollView,Dimensions,Text } from 'react-native';
import { setLocalNotification,clearLocalNotification} from '../utils/helper'
const {height} = Dimensions.get('window')
const realHeight = height-56;
import Carta from './Carta'
export default class card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      aciertos: 0
    }
    this.current=0;
  }
  siguiente(){
    this.current++;
    let data =this.props.navigation.state.params.data;
    let questions=data.questions;
    if(this.current>=questions.length){
      this.props.navigation.goBack();
    }
    this.scrollView.scrollTo({x: 0, y: realHeight*this.current},true)
  }
  rewind(){
    this.current = 0;
    this.scrollView.scrollTo({x: 0, y: 0},true)
    this.setState({aciertos: 0})
  }
  accumulate(delta){
    this.setState({aciertos: this.state.aciertos+delta})
  }
  render() {
    let data =this.props.navigation.state.params.data;
    let questions=data.questions;
    return (
      <View style={styles.container}>
        <View style={{height: 30, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>
            Has acertado: {this.state.aciertos}/{questions.length} preguntas
          </Text>
        </View>
        <ScrollView
          scrollEnabled={false}
          ref={(ref)=>this.scrollView=ref}
        >
          {questions.map(
            (question,index)=><Carta
              rightanswer={this.state.aciertos}
              totalq={questions.length}
              key={index}
              accumulate={this.accumulate.bind(this)}
              question={question}
              last={index==questions.length-1}
              rewind={this.rewind.bind(this)}
              siguiente={this.siguiente.bind(this)}/>)}
        </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
  }
});