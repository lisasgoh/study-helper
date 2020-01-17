import React, { Component } from 'react';
//import { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';

export class Modules extends Component {
  state = {
    module: '',
    modules: []
  };
  inputHandler = module => {
    this.setState({ module });
  };
  addHandler = () => {
    this.setState({
      modules:  [...this.state.modules, this.state.module] //this.state is necessary for module if not have error
    });
  };
    render() {
      const {navigate} = this.props.navigation;
      const { module } = this.state;
      return (
        <View style={styles.screen}>
          <View style = {styles.inputContainer}>
            <TextInput 
                placeholder= "Modules Taken" 
                style={styles.input} 
                onChangeText={this.inputHandler} 
                value={module}/>
            <Button title="ADD" onPress={this.addHandler}/>
          </View>
          <View>
            {this.state.modules.map((mod) => <Button title = {mod} style={styles.screen} onPress={() => navigate('Search')} />)}
          </View>
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

  