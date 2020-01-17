import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';

export class Login extends Component {
  static navigationOptions = {
    title: 'Login',
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
    const {navigate} = this.props.navigation;
    const { username } = this.state;
    const { password } = this.state;
    return (
      <View style={styles.screen} >
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder= "Username" 
                style={styles.input} 
                onChangeText={this.usernameHandler} 
                value={username}
            />
            <TextInput 
                placeholder= "Password" 
                style={styles.input} 
                onChangeText={this.passwordHandler} 
                value={password}
            />
            <Button title="Login" onPress={() => navigate('Modules')} />
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
        position: 'absolute',
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        top: 0,
        left: 0
    }
  })

export default Login;