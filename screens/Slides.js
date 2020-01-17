import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const cz2002 = [
    {
    "week": "1",
    "transcript": {
        "0:00:00": "she sells sea shells by the sea shore",
        "0:00:10": "pineapple pen",
        "0:00:20": "peter piper picked a peck of pickled pepper"
    },
    "slides": {
        "Slide 1": "0:00:00",
        "Slide 2": "0:00:50",
        "Slide 3": "0:01:30"
    }
    },
    {
    "week": "2",
    "transcript": {
        "0:00:00": "elmo's world",
        "0:00:10": "you should see me in a crown",
        "0:00:20": "sample text"
    },
    "slides": {
      "Slide 1": "0:00:00",
      "Slide 2": "0:00:50",
      "Slide 3": "0:01:30"
    }
    }
]

export class Transcript extends Component {
  static navigationOptions = {
    title: 'Slides Information',
  };
  constructor(props) {
    super(props);
    const lesson = props.navigation.state.params.lesson;
    this.state = {
      data: cz2002, //if {} => object, now is array of json objects
      tableHead:  Object.entries(cz2002[lesson]["slides"]),
      tableData:  Object.values(cz2002[lesson]["slides"]),
      link: cz2002[lesson]["link"]
    };
  }
  render() {
    return (
        <View>
            {this.state.tableHead.map((slide) => <Text> {slide} </Text>)}
            {this.state.tableData.map((slide) => <Text> {slide} </Text>)}
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

export default Transcript;