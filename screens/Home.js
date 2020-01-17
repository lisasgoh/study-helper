import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';

export class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
          <Text style= {styles.container}>Welcome to Lecture Assistant!</Text>
          <Button title="Go to Module Screen" onPress={() => navigate('Modules')}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;