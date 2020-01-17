//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ModuleScreen from './screens/Modules';
import LoginScreen from './screens/Login';
import LessonScreen from './screens/Lessons';
import InfoScreen from './screens/Info';
import SlidesScreen from './screens/Slides';
import TranscriptScreen from './screens/Transcript';


const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Modules: {screen: ModuleScreen},
  Search: {screen: SearchScreen},
  Lesson: {screen: LessonScreen},
  Info: {screen: InfoScreen},
  Slides: {screen: SlidesScreen},
  Transcript: {screen: TranscriptScreen}
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
/*
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the home screen</Text>
        <AppContainer />
      </View>
    )
  }
}*/