import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput,ImageBackground } from 'react-native';
//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
import { Button, Input } from 'react-native-elements';
import bg from '../assets/splashoverlay.png' // set image path
export class Login extends Component {
  static navigationOptions = {
    title: 'Login to Study Helper',
  };
  state = {
    username: '',
    password: ''
  };
  usernameHandler = username => {
    this.setState({ username });
  };
  passwordHandler = password => {
    this.setState({ password });
  };
  render() {
    const { navigate } = this.props.navigation;
    const { username } = this.state;
    const { password } = this.state;
    return (
      <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
       
      <View style={styles.screen} >
        
        <View style={styles.inputContainer}>
          <Input
            placeholder="Username"
            containerStyle={styles.input2}
            //inputContainerStyle={styles.input}
            onChangeText={this.usernameHandler}
            value={username}
          />
          <Input
            placeholder="Password"
            containerStyle={styles.input2}
            //inputContainerStyle={styles.input}
            onChangeText={this.passwordHandler}
            value={password}
          />
          <Button title="Login" onPress={() => navigate('Modules')} containerStyle={styles.login} />
        </View>
      </View></ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 80,
    marginHorizontal:20
  },
  inputContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    
    fontSize: 20,
    //flex:10,
    //padding:10
  },
  input2: {
    marginTop: 80,
    //alignItems: 'stretch',
  },
  login: {
    marginTop: 80,
    alignSelf: 'stretch',
    height: 1

  }
  
})

export default Login;