import React from 'react';
import { StyleSheet, View, ScrollView,Dimensions } from 'react-native';
const {height} = Dimensions.get('window')
const realHeight = height-56;
import Carta from './Carta'
export default class card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
  render() {
    let data =this.props.navigation.state.params.data;
    let questions=data.questions;
    return (
      <View style={styles.container}>
        <ScrollView
          scrollEnabled={false}
          ref={(ref)=>this.scrollView=ref}
        >
          {questions.map(
            (question,index)=><Carta key={index} question={question} siguiente={this.siguiente.bind(this)}/>)}
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