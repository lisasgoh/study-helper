import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';

export class Settings extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Text>This is the Settings screen</Text>
            <Button title="Go to Home Screen" onPress={() => navigate('Home')}
            />
        </View>
      );
    }
  }

  export default Settings;