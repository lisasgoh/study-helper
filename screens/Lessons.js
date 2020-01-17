import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';

export class Lesson extends Component {
    state = {
       lessons: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", 
       "Lesson 5", "Lesson 6", "Lesson 7", "Lesson 8", "Lesson 9", 
       "Lesson 10", "Lesson 11", "Lesson 12"]
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
        <View>
            {this.state.lessons.map((lesson) => <Button title = {lesson} style={styles.screen} onPress={() => navigate('Modules')}/>)}
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

export default Lesson;