import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Buttons from '../components/Buttons';
import Home from '../App.js'

{/*This allows you to bold like you do in HTML*/}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

export default class PlayScreen extends Component {

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

        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          <B>For the supplemental educational game, we utilize the Unity Remote iPhone app. This app can be downloaded here: </B>
        </Text>

        <TouchableHighlight onPress={() => Linking.openURL('https://itunes.apple.com/us/app/unity-remote-5/id871767552?mt=8') }>
                <View style={buttonStyles.button}>
                    <Text style={styles.buttonText}>Coversion Factor Video</Text>
                </View>
        </TouchableHighlight>

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
  },
})

const buttonStyles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
    color: 'white'
  }
});
