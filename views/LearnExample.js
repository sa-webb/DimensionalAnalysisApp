import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, ScrollView, Image, View, TouchableHighlight } from 'react-native';
import Home from '../App.js'

{/*This allows you to bold like you do in HTML*/}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

export default class FlatListBasics extends Component {

  static navigationOptions = {
    title: 'PROBLEM ONE',
};

  render() {
    return (

      <ScrollView style={styles.contentContainer}>
        <View style={styles.container}>

          <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
            Click <B>Next Step</B> to step through each process of solving this problem,
            or <B>Previous Step</B> to see a prior step in solving this problem.
          </Text>

          {/*WE SHOULD MAKE THIS A FETCH EVENTUALLY*/}
          {/*Practice Question*/}
          <Image source={require('../PracticeQuestion.png')}
            style={{ width: 350 }}
            resizeMode="contain"
          />

          <View style ={buttonrow.button}>
            {/*Prev Button*/}
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
              <View style={buttonStyles.button2}>
                <Text style={buttonStyles.Text}>{"<< Previous"}</Text>
              </View>
            </TouchableHighlight>

            {/*Next Button*/}
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
              <View style={buttonStyles.button2}>
                <Text style={buttonStyles.Text}>{"Next >>"}</Text>
              </View>
            </TouchableHighlight>
          </View>

          {/*Return to Main Menu Button*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
            <View style={buttonStyles.button}>
              <Text style={buttonStyles.buttonText}>Return to Main Menu</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   backgroundColor: 'black',
   paddingTop: 22,
  },
  item: {
    padding: 40,
    color: 'white',
    fontSize: 24,
    height: 44,
  },
  contentContainer: {
      paddingVertical: 10,
      backgroundColor: 'black',
  }
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
  },
  Text: {
    fontSize: 20,
    padding: 20,
    color: 'black'
  },

  button2: {
    marginBottom: 5,
    width: 175,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold'
  },
});

const buttonrow = StyleSheet.create({
  button: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 20
}
});
