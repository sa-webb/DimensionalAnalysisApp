import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, ScrollView, Image, View, TouchableHighlight } from 'react-native';
import Buttons from '../components/Buttons';
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

          {/*Prev Button*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') } underlayColor="blue">
            <View style={buttonStyles.button}>
              <Text style={buttonStyles.buttonText}>Previous Step</Text>
            </View>
          </TouchableHighlight>

          {/*Next Button*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') } underlayColor="blue">
            <View style={buttonStyles.button}>
              <Text style={buttonStyles.buttonText}>Next Step</Text>
            </View>
          </TouchableHighlight>

          {/*Return to Main Menu Button*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') } underlayColor="blue">
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
