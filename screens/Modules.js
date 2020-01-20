import React, { Component } from 'react';
//import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements'

//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
const modules = {"CZ2002":"Object Oriented Design and Programming", 
"CZ2003":"Computer Graphics and Visualisation", 
"CZ2004":"Human Computer Interaction"}

export class Modules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Object.entries(modules), //if {} => object, now is array of json objects
      
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.screen}>
        
        {
          this.state.data.map((x) => (
            <ListItem style={styles.list}
              onPress={() => navigate('Search')}
              title={x[0]}
              subtitle={x[1]}
              bottomDivider
              chevron
            />
          ))
        }
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
  },
  list: {
    marginTop:20,
  }
})
export default Modules;