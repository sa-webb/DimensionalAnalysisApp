import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, Image, View, TextInput, TouchableHighlight } from 'react-native';
import Buttons from '../components/Buttons';
import Home from '../App.js'

{/*This allows you to bold like you do in HTML*/}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

export default class FlatListBasics extends Component {

  static navigationOptions = {
    title: 'PRACTICE',
};

  /*constructor for textbox*/
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={styles.container}>

      {/*
        <Text style={{color: 'white', fontSize: 40, textAlign: 'center'}}>
          <B>GUIDE</B>
        </Text>
      */}

        {/*WE SHOULD MAKE THIS A FETCH EVENTUALLY*/}
        {/*Practice Question*/}
        <Image source={require('../PracticeQuestion.png')}
          style={{ width: 375 }}
          resizeMode="contain"
        />

        <View style={{flexDirection:'row'}}>
            <View>
              <TextInput
                  style={{ alignItems:'center', height: 35, width: 200, padding: 5, justifyContent:'center', backgroundColor:'white' }}
                  onChangeText = {(text) => this.setState({text})}
                  value = {this.state.text}
                  keyboardType = 'web-search'
                  />
            </View>

            <Text></Text>
              {/*Submits Answer*/}
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
                <View style={buttonStyles.button2}>
                  <Text style={buttonStyles.Text}>Submit</Text>
                </View>
              </TouchableHighlight>
        </View>

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
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
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
  }
})

const buttonStyles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  button2: {
    width: 75,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
    color: 'white',
    textAlign: 'center'
  },
  Text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});
