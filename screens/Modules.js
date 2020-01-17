import React, { Component } from 'react';
//import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements'
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
          {this.state.data.map((mod) => <Button title = {mod} containerStyle={styles.inputContainer} onPress={() => navigate('Search')} />)}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    screen: {
      padding: 20
      
    },
    inputContainer: {
        //flexDirection: 'row',
        marginTop: 50,
        
        //justifyContent: 'space-between',
        //alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
  })
  export default Modules;