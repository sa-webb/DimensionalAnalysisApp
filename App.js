import React from 'react';
import { StyleSheet, Button, Text, View, Image, ScrollView, StatusBar, TouchableHighlight, Linking } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

// Static Screens
import GuideScreen from './views/GuideScreen';
import LearnScreen from './views/LearnScreen';
import LearnExample from './views/LearnExample';
import TutorialVideos from './views/TutorialVideos';
import PlayScreen from './views/PlayScreen';
import PracticeScreen from './views/PracticeScreen';
import ReferenceScreen from './views/ReferenceScreen';
import HomeScreen from './views/HomeScreen';
import Article from './components/Article';


// Server screens
import ArticleFetch from './components/ArticleFetch';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Guide: GuideScreen,
    Learn: LearnScreen,
    Example: LearnExample,
    Play: PlayScreen,
    Practice: PracticeScreen,
    Reference: ReferenceScreen,
    Tutorials: TutorialVideos,
    Articles: ArticleFetch,
    Article: Article
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
    color: 'gold'
  },
  contentContainer: {
      paddingVertical: 10,
      backgroundColor: 'black',
  }
});
