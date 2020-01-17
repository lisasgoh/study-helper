import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements'

//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
const cz2002 = [
    {
    "week": "1",
    "transcript": {
        "0:00:00": "text of transcript here sample text",
        "0:00:10": "sample text",
        "0:00:20": "sample text again"
    },
    "slides": {
        "Slide 1":"0:00:00",
        "Slide 2":"0:00:50",
        "Slide 3":"0:01:30"
    }
    },
    {
    "week": "2",
    "transcript": {
        "0:00:00": "text of transcript here sample text",
        "0:00:10": "district boys",
        "0:00:20": "sample text again"
    },
    "slides": {
        "Slide 1": "0:00:00",
        "Slide 2": "0:00:50",
        "Slide 3": "0:01:30"
    }
    }
]

export class Info extends Component {
  static navigationOptions = {
    title: 'Information That Excites',
  };
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    console.log(Object.keys(cz2002[this.props.navigation.state.params.lesson]["slides"]));
    return (
      <View style={styles.container}>
          <Button title="Full Transcript" containerStyle={styles.button} onPress={() => navigate('Transcript', {lesson: this.props.navigation.state.params.lesson})} />
          <Button title="Slides" containerStyle={styles.button} onPress={() => navigate('Slides', {lesson: this.props.navigation.state.params.lesson})} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding:10
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  button: {
    marginTop: 80
  }
});

export default Info;