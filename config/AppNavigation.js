import React from 'react';

import createStackNavigator from 'react-navigation';

import GuideScreen from '../views/GuideScreen';
import LearnScreen from '../views/LearnScreen';
import LearnExample from '../content/questions/LearnExample';
import TutorialVideos from '../views/TutorialVideos';
import PlayScreen from '../views/PlayScreen';
import PracticeScreen from '../views/PracticeScreen';
import ReferenceScreen from '../views/ReferenceScreen';
import HomeScreen from '../views/HomeScreen';
import Article from '../components/Article';


// Server screens
import ArticleFetch from '../components/ArticleFetch';

const RootStackk = createStackNavigator(
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