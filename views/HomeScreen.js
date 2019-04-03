import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Image, ScrollView, StatusBar, TouchableHighlight, Linking } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

{/*This allows you to bold like you do in HTML*/}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

export default class HomeScreen extends Component {

    static navigationOptions = {
      title: 'DASH - An Educational App',
      header: null
  };
  
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('../assets/iPhoneLogo.png'),
      ])
    ]);
    };
    render() {
      return (
  
        <ScrollView style={styles.contentContainer}>
  
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
  
            <StatusBar backgroundColor="blue" barStyle="light-content" />
  
            <Text></Text>
            <Text></Text>
  
            {/*Logo*/}
            <Image source={require('../assets/iPhoneLogo.png')} />
            <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
              <B>Chemistry Edition</B>
            </Text>
  
            <Text></Text>
            <Text></Text>
  
            {/*Guide Button*/}
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Guide') }>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Guide</Text>
              </View>
            </TouchableHighlight>
  
            {/*Learn Button*/}
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Articles') }>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Learn</Text>
              </View>
            </TouchableHighlight>
  
            {/*Play Button*/}
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Play') }>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Play</Text>
              </View>
            </TouchableHighlight>
  
            {/*Practice Button*/}
            <TouchableHighlight onPress={() => this.props.navigation.navigate('LearnOne') }>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Practice</Text>
              </View>
            </TouchableHighlight>
  
            {/*References Button*/}
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Reference') }>
              <View style={styles.button}>
                <Text style={styles.buttonText}>References</Text>
              </View>
            </TouchableHighlight>
  
            {/*Measure On Your Own Button*/}
            <TouchableHighlight onPress={() => Linking.openURL('itms-apps://itunes.apple.com/us/app/measure/id1383426740?mt=8') }>
              <View>
                <Text style={styles.Text}>Click Here to Measure On Your Own!</Text>
              </View>
            </TouchableHighlight>
  
            <Text></Text>
            <Text></Text>
  
          </View>
        </ScrollView>
      );
    }
  }


const styles = StyleSheet.create({
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: 'blue'
    },
    buttonText: {
      fontSize: 28,
      padding: 20,
      color: 'white'
    },
    Text: {
      fontSize: 22,
      padding: 20,
      color: 'gold'
    },
    contentContainer: {
        paddingVertical: 10,
        backgroundColor: 'black',
    }
  });