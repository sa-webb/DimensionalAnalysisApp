import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Buttons from '../components/Buttons';
import Home from '../App.js'

{/*This allows you to bold like you do in HTML*/}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

export default class FlatListBasics extends Component {

  static navigationOptions = {
    title: 'LEARN',
};

  render() {
    return (
      <View style={styles.container}>

      {/*
        <Text style={{color: 'white', fontSize: 40, textAlign: 'center'}}>
          <B>LEARN</B>
        </Text>
      */}

        <Text></Text>
        <Text></Text>

        <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
          Click <B>Start</B> to begin walking through different
          dimensional analysis problems:
        </Text>

        <Text></Text>
        <Text></Text>

        {/*Start Button*/}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') } underlayColor="blue">
          <View style={buttonStyles.button}>
            <Text style={buttonStyles.buttonText}>Start</Text>
          </View>
        </TouchableHighlight>

        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          For each problem, use the <B>Next</B> button to step through
          each part of solving it.
        </Text>

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
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