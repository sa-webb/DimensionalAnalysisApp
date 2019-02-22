import React from 'react';
import { StyleSheet, Button, Text, View, Image, ScrollView, TouchableHighlight, Linking } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';


import Buttons from './components/Buttons';

import GuideScreen from './views/GuideScreen';

import LearnScreen from './views/LearnScreen';
import LearnExample from './views/LearnExample';
import TutorialVideos from './views/TutorialVideos';

import PlayScreen from './views/PlayScreen';

import PracticeScreen from './views/PracticeScreen';

import ReferenceScreen from './views/ReferenceScreen';

import ProductFetch from './views/ProductFetch';

{/*This allows you to bold like you do in HTML*/}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'DASH - An Educational App',
    header: null
};

  render() {
    return (

      <ScrollView style={styles.contentContainer}>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>

          {/*Logo*/}
          <Image source={require('./iPhoneLogo.png')} />
          <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
            <B>Chemistry Edition</B>
          </Text>

          <Text></Text>
          <Text></Text>

          {/*Guide Button*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Guide') } underlayColor="blue">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Guide</Text>
            </View>
          </TouchableHighlight>

          {/*Learn Button*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Learn') } underlayColor="blue">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Learn</Text>
            </View>
          </TouchableHighlight>

          {/*Play Button*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Play') } underlayColor="blue">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Play</Text>
            </View>
          </TouchableHighlight>

          {/*Practice Button*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Practice') } underlayColor="blue">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Practice</Text>
            </View>
          </TouchableHighlight>

          {/*References Button*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Reference') } underlayColor="blue">
            <View style={styles.button}>
              <Text style={styles.buttonText}>References</Text>
            </View>
          </TouchableHighlight>

          {/*Measure On Your Own Button*/}
          <TouchableHighlight onPress={() => Linking.openURL('itms-apps://itunes.apple.com/us/app/measure/id1383426740?mt=8') } underlayColor="blue">
            <View>
              <Text style={styles.buttonText}>Click Here to Measure On Your Own!</Text>
            </View>
          </TouchableHighlight>

        </View>
      </ScrollView>
    );
  }
}

/**
 * backgroundColor: UTC Blue #00386b
 * headerTintColor: UTC Gold  #e0aa0f
 * color: UTC Gold #e0aa0f
 */

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Guide: GuideScreen,
    Learn: LearnScreen,
    Example: LearnExample,
    Play: PlayScreen,
    Practice: PracticeScreen,
    Reference: ReferenceScreen,
    Fetch: ProductFetch,
    Button: Buttons,
    Tutorials: TutorialVideos

  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
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
  },
  contentContainer: {
      paddingVertical: 10,
      backgroundColor: 'black',
  }
});
