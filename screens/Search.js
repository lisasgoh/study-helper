import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import Constants from 'expo-constants';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import { Table, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
//import cz2002 from './data/cz2002.json';
const cz2002 = [
  {
  "week": "1",
  "link": "lkl.pdf",
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
  "link": "sdasd.pdf",
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
export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: cz2002, //if {} => object, now is array of json objects
      error: null,
      value: '',
    };
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };
  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={text => this.searchFilterFunction(text)}
        value={this.state.value}
      />
    );
  };
  searchFilterFunction = text => {
    this.setState({
      value: text
    });
    const newData = cz2002.filter(elem => Object.values(elem.transcript).some(indivScript => indivScript.includes(text)))
    this.setState({
      data: newData
    });
  };
  //lag by 1

  render() {
    const {navigate} = this.props.navigation;
    if (this.state.loading) {
      return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <FlatList
           // keyExtractor={(item, index) => `${index}`}
            //extraData={this.state}
            data={this.state.data}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            renderItem={({ item }) => ( //takes an item from data andd renders
            <Button title={"Lesson " + item["week"]} onPress={() => navigate('Info', {lesson: parseInt(item["week"])-1})}/>
            )}
          />
        </View>
      );
    }
  }
}
export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});

 //cz2002 is an array of objects
    //how to return the ids? of the objects that contains text in object.transcript
    //object format { "transcript": {"time": "string"}, }
    //Object.values(elem.transcript) converts to ["string", "string"]
    //newData will be an array of objects
