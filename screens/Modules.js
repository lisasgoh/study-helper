import React, { Component } from 'react';
//import { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
const modules = ["CZ2002", "CZ2003", "CZ2004"]

export class Modules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: modules, //if {} => object, now is array of json objects
    };
  }
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.screen}>
          {this.state.data.map((mod) => <Button title = {mod} style={styles.screen} onPress={() => navigate('Search')} />)}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
  })
  export default Modules;