import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Table, Row, Rows} from 'react-native-table-component';
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
    const lesson = props.navigation.state.params.lesson;
    this.state = {
      data: cz2002, //if {} => object, now is array of json objects
      tableHead:  Object.keys(cz2002[lesson]["slides"]),
      tableData:  Object.values(cz2002[lesson]["slides"]),
      link: cz2002[lesson]["link"]
    };
  }
  render() {
    const {navigate} = this.props.navigation;
    console.log(Object.keys(cz2002[this.props.navigation.state.params.lesson]["slides"]));
    return (
      <View>
          <Button title="Load Transcript" onPress={() => console.log("Hi")} />
          <View>
            {this.state.tableHead.map((slide) => <Text> {slide} </Text>)}
            {this.state.tableData.map((slide) => <Text> {slide} </Text>)}
          </View>
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

export default Info;