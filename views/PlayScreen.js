import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Buttons from '../components/Buttons';
import Home from '../App.js'

{/*This allows you to bold like you do in HTML*/}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

export default class FlatListBasics extends Component {

  static navigationOptions = {
    title: 'PLAY',
};

  render() {
    return (
      <View style={styles.container}>

      {/*
        <Text style={{color: 'white', fontSize: 40, textAlign: 'center'}}>
          <B>GUIDE</B>
        </Text>
      */}

        <Text> </Text>

        <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
          <B>DASH is broken down into three main components:</B>
        </Text>

        <Text> </Text>

        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          <B>1. Learn - </B>
          This section provides
          step-by-step tutorials for understanding how to solve dimensional
          analysisproblems
        </Text>

        <Text></Text>

        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          <B>2. Play - </B>
          This section features a 2D
          platformer game that tests your ability to convert different units
          using dimensional analysis, and then reason which of the two displayed
          measurements is greater and which is smaller.
        </Text>

        <Text></Text>

        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          <B>3. Practice - </B>
          This section features a
          variety of questions asked in the form of short answer.
        </Text>

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        {/*Return to Main Menu Button*/}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') } underlayColor="blue">
          <View style={buttonStyles.button}>
            <Text style={buttonStyles.buttonText}>Return to Main Menu</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   backgroundColor: 'black',
   paddingTop: 22
  },
  item: {
    padding: 40,
    color: 'white',
    fontSize: 24,
    height: 44,
  },
})

const buttonStyles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
    color: 'blue'
  }
});
