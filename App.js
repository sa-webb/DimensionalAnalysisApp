import React from 'react';
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import ReferenceScreen from './views/ReferenceScreen';
import FlatList from './views/FlatList';

import Buttons from './components/Buttons';

import ProductFetch from './views/ProductFetch';

import ChemScreen from './views/tutorials/ChemScreen';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'DASH - An Educational App',
};

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>

        {/*Guide Button*/}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('List') } underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Guide</Text>
          </View>
        </TouchableHighlight>

        {/*Learn Button*/}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('List') } underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Learn</Text>
          </View>
        </TouchableHighlight>

        {/*Play Button*/}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Reference') } underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Play</Text>
          </View>
        </TouchableHighlight>

        {/*Practice Button*/}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Reference') } underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Practice</Text>
          </View>
        </TouchableHighlight>

        {/*References Button*/}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Reference') } underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>References</Text>
          </View>
        </TouchableHighlight>

        {/*Measure On Your Own Button*/}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Reference') } underlayColor="white">
          <View>
            <Text style={styles.buttonText}>Click Here to Measure On Your Own!</Text>
          </View>
        </TouchableHighlight>

      </View>
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
    List: FlatList,
    Reference: ReferenceScreen,
    Fetch: ProductFetch,
    Button: Buttons,

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
  }
});
