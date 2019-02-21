import React from 'react';
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import ReferenceScreen from './views/ReferenceScreen';
import FlatList from './components/FlatList';

import Buttons from './components/Buttons';

import ProductFetch from './views/ProductFetch';

import ChemScreen from './views/tutorials/ChemScreen';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'UTC Dimension Analysis',
};

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0aa0f'}}>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('List') } underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tutorials List</Text>
          </View>
        </TouchableHighlight>
        
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Reference') } underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>References</Text>
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
        backgroundColor: '#00386b',
      },
      headerTintColor: '#e0aa0f',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#e0aa0f',
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
    backgroundColor: '#00386b'
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
    color: '#e0aa0f'
  }
});
