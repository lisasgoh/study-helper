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
      "0:00:00": "text of transcript here sample text",
      "0:00:10": "sample text",
      "0:00:20": "sample text again"
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
export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: cz2002, //if {} => object, now is array of json objects
      error: null,
      value: '',
      tableHead: [],
      tableData: [],
      link: '',
      buttonPressed: false,
      item: ''
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

  buttonPressed = (lesson) => {
    this.setState({
      buttonPressed: true,
      item: lesson,
      tableHead:  [...Object.keys(cz2002[lesson]["slides"])],
      tableData:  [...Object.values(cz2002[lesson]["slides"])],
      link: cz2002[lesson]["link"],
    });
    console.log(this.state.tableHead)
    console.log(this.state.tableData)
    console.log(this.state.link)
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
    else if (this.state.buttonPressed) {
      return (
      <View style={styles.table}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={this.state.tableData} textStyle={styles.text}/>
      </Table>
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
            <Button title={"Lesson " + item["week"]} onPress={() => {this.buttonPressed(parseInt(item["week"])-1)}}/>
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
  },
  table: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff'
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

 //cz2002 is an array of objects
    //how to return the ids? of the objects that contains text in object.transcript
    //object format { "transcript": {"time": "string"}, }
    //Object.values(elem.transcript) converts to ["string", "string"]
    //newData will be an array of objects
