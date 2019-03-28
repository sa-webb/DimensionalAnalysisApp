import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, Image, View, TextInput, TouchableHighlight } from 'react-native';
import Home from '../App.js'

{/*This allows you to bold like you do in HTML*/}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

export default class PracticeScreen extends Component {

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

        <Image source={require('../assets/PracticeQuestion.png')}
          style={{ width: 375 }}
          resizeMode="contain"
        />

        <View style={{flexDirection:'row'}}>
            <View>
              <TextInput
                  style={{ alignItems:'center', height: 35, width: 200, padding: 5, justifyContent:'center', backgroundColor:'white' }}
                  placeholder="Enter Answer"
                  onChangeText = {(text) => this.setState({text})}
                  value = {this.state.text}
                  keyboardType = 'web-search'
              />
            </View>
          </View>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
                <View style={buttonStyles.submitButton}>
                  <Text style={buttonStyles.Text}>Submit</Text>
                </View>
          </TouchableHighlight>

          <View style ={buttonrow.button}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
              <View style={buttonStyles.button2}>
                <Text style={buttonStyles.Text}>{"<< Previous"}</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
              <View style={buttonStyles.button2}>
                <Text style={buttonStyles.Text}>{"Next >>"}</Text>
              </View>
            </TouchableHighlight>
          </View>
          
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
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  button2: {
    width: 150,
    height: 35,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  submitButton: {
    width: 150,
    height: 35,
    marginTop: 20,
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

const buttonrow = StyleSheet.create({
  button: {
  marginBottom: 5,
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 2
}
});
