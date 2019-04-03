import React from 'react';
import { StyleSheet, Button, Text, View, Image, ScrollView, StatusBar, TouchableHighlight, Linking } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

// Static Screens
import GuideScreen from './views/GuideScreen';
import TutorialVideos from './views/TutorialVideos';
import PlayScreen from './views/PlayScreen';
import ReferenceScreen from './views/ReferenceScreen';
import HomeScreen from './views/HomeScreen';

// Server screens
import ArticleFetch from './content/tutorials/ArticleFetch';
import Article from './content/tutorials/Article';

// Quiz screens
import LearnExample from './content/questions/LearnExample';
import LearnExampleTwo from './content/questions/LearnExampleTwo';

//import RootStackk from './config/Navigation';
// import AppContainer from './config/Navigation';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Guide: GuideScreen,
    LearnOne: LearnExample,
    LearnTwo: LearnExampleTwo,
    Play: PlayScreen,
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
