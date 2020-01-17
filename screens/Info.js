import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements'

//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
const cz2002 = [
  {
  "week": "1",
  "transcript": {
    "00:00": ": let's start with the first topic of this chapter sequence diagram elements here we will discuss the elements",
    "00:10": ": on the sequence diagram their suffering which bounce the diagram on the top left-hand corner of it is the name of the sequence",
    "00:20": ": which can be the name of a method of a particular class was a functioning in which this flawless about secrets diagram is about objects to lodge",
    "00:30": ": therefore we have which you call class of fires which is also known as participants these are mainly objects in the rec hanky",
    "00:40": ": sometimes we can see one skeleton of the human which is the symbol for an actor representing external entity this can be human being or not",
    "00:50": ": some extra user using this system or an application when we talk about the object itself the convention for representing the curtis",
    "01:00": ": you similar to the objects diagram where colin is present before the colon is the object name and after the coleman is the class name sir",
    "01:10": ": which cost the object belongs to and what is the instance or reference name given to the subject next you can see the vertical gash lie",
    "01:20": ": together they are called lifeline when you see a lifeline talks about the existence or timeline object to this class",
    "01:30": ": instead she did or be already in state she is and is ready to be called to perform tasks and participate in an interaction",
    "01:40": ": they did to perform a task and activation block or boxes show you all know that some object has invoked it's method and triggered a dipper",
    "01:50": ": object interaction is basically object to object interaction by sending messages between them the message to my baby",
    "02:00": ": synchronize asynchronous message in itself is basically blocking when you send a message out you expect the replied before you",
    "02:10": ": most of the cold you have written lorena synchronize way were you invoke a method and wait for to eternal resolved before you can continue to",
    "02:20": ": asynchronous is the reverse when you send a message are you need not wait for its replied before continuing is mostly you",
    "02:30": ": processes where assad threat is triggered to perform the task into the main threat will proceed on with the main flo at some point",
    "02:40": ": some thread completes its task a message will be sent to the main threat artistry triggering event or call back function when you say",
    "02:50": ": there is also return message return messages represented similar to the class dependency connector which is it dashed line hero",
    "03:00": ": wooded now got a message being sent to an object is basically a method belonging to the object itself that is being invoked for the toggle may",
    "03:10": ": toggle as a method exist in the light class thus you show the message by stating the actual methods signature to find in the class",
    "03:20": ": call its own method also by performing itself message sequence diagram should always be read top-down whether it is from left",
    "03:30": ": it depends as it mostly depends on how you place the participants objects the horizontal flow of the messages would be different so it can be",
    "03:40": ": or right to left depending on the sequence of the objects placed by that she definitely be red top down you have",
    "03:50": ": the real tight classes so instead of using the rectangular shaped to represent the objects you can also use the stereotype icon instead in the seat",
    "04:00": ": you'll notice that if you put it in its theory uptight format you would be able to know more information about the role of the classes here",
    "04:10": ": about activation boxes the activation boxes help you know with the start of the method audience as mentioned earlier tacos 'em",
    "04:20": ": like last so having this activation block means that at the start of the activation is also the starting of the method body",
    "04:30": ": i read there is a self call which caused the gets the message of itself which will also be a statement inside the method body itself",
    "04:40": ": the activation box this is also the end of the method body the activation boxes are important to understand and determined to start in",
    "04:50": ": into the methods boundaries in your malin in some you're not design tools you'll see two types of self message",
    "05:00": ": the shoe box which is called the south message into the other with two activation boxes with a shoulder was on top of the longer won",
    "05:10": ": s. h. rechristened messages also itself message to avoid any confusion and to simplify use it you alone",
    "05:20": ": message this is for the simple reason that it can clearly show where is the message coming from since the activation block will tell you where the bouncer",
    "05:30": ": if the message is being sent within the shorter box you'll know that it is within myself message method the night",
    "05:40": ": how to spin she ate the object by having to dashed arrow pointing to a participant object these two together will show whether it is",
    "05:50": ": orenstein she haitian you can put any input parameters inside the new to show the constructor that is being caught you can",
    "06:00": ": angular shape or the stinger type icons to represent the object when there's construction there's going to be the strachan is wow",
    "06:10": ": is represented by across at the end of the lifeline to show that the object is no longer in existence the cross in java code is simply to it",
    "06:20": ": no usually there's a class diagram before sequence diagram by the time you drop sequence diagram",
    "06:30": ": would already have been created and to find in the class diagram you can therefore map out the flow using these methods when you were",
    "06:40": ": diagrams you may discover new methods which you can use to modify the class diagrams and act on these methods class diagrams",
    "06:50": ": rams complement each other to make each of the diagrams complete on the message itself you have to be clear about what is being passed to",
    "07:00": ": and what is being returned every information that is being put into the sequence diagram must be traceable for example",
    "07:10": ": this case is a method of the order class because it is invoking into the sort of class therefore there should be a correlation in the crossfire",
    "07:20": ": define its methods signature for you to know what are the parameter types so today is the argument passed to the dispatch method and it is",
    "07:30": ": the return from this method is a bully and it'll be assigned to the resolve variable with the result itself you would want",
    "07:40": ": the dispatch manager class two people to hold on to the resolved returned so that it can be used the leader in the flow similarly",
    "07:50": ": mentioned in some part of the sequence diagram to understand where it comes from where it is created or where'd returns from him",
    "08:00": ": you can also show within the method perimeter of the eagle which will be assigned to the updated value of the method for the verify transactions my",
    "08:10": ": records is a very able declared in dispatch manager class which is passed to the verify transactions methods and will be assigned to value when the",
    "08:20": ": remember the idea of getting out or pass by reference he knew him at all you'll see the word called operation",
    "08:30": ": meaning as method and function just that in you and now is called operation and not method or function another three",
    "08:40": ": and he did not see any return message being shown in the diagram after messages didn't send it should be understood that there is always to return",
    "08:50": ": we got mr returned type is void of primitive or reference type return message is not shown if it does not providing it"
  },
  "slides": {
    "Slide 2": ": 00:10",
    "Slide 3": ": 03:40",
    "Slide 4": ": 04:30",
    "Slide 5": ": 05:30",
    "Slide 6": ": 05:50",
    "Slide 7": ": 06:30",
    "Slide 8": ": 07:00"
  }
  },
  {
  "week": "2",
  "transcript": {
    "00:00": ": let's start with the first topic of this chapter sequence diagram elements here we will discuss the elements",
    "00:10": ": on the sequence diagram their suffering which bounce the diagram on the top left-hand corner of it is the name of the sequence",
    "00:20": ": which can be the name of a method of a particular class was a functioning in which this flawless about secrets diagram is about objects to lodge",
    "00:30": ": therefore we have which you call class of fires which is also known as participants these are mainly objects in the rec hanky",
    "00:40": ": sometimes we can see one skeleton of the human which is the symbol for an actor representing external entity this can be human being or not",
    "00:50": ": some extra user using this system or an application when we talk about the object itself the convention for representing the curtis",
    "01:00": ": you similar to the objects diagram where colin is present before the colon is the object name and after the coleman is the class name sir",
    "01:10": ": which cost the object belongs to and what is the instance or reference name given to the subject next you can see the vertical gash lie",
    "01:20": ": together they are called lifeline when you see a lifeline talks about the existence or timeline object to this class",
    "01:30": ": instead she did or be already in state she is and is ready to be called to perform tasks and participate in an interaction",
    "01:40": ": they did to perform a task and activation block or boxes show you all know that some object has invoked it's method and triggered a dipper",
    "01:50": ": object interaction is basically object to object interaction by sending messages between them the message to my baby",
    "02:00": ": synchronize asynchronous message in itself is basically blocking when you send a message out you expect the replied before you",
    "02:10": ": most of the cold you have written lorena synchronize way were you invoke a method and wait for to eternal resolved before you can continue to",
    "02:20": ": asynchronous is the reverse when you send a message are you need not wait for its replied before continuing is mostly you",
    "02:30": ": processes where assad threat is triggered to perform the task into the main threat will proceed on with the main flo at some point",
    "02:40": ": some thread completes its task a message will be sent to the main threat artistry triggering event or call back function when you say",
    "02:50": ": there is also return message return messages represented similar to the class dependency connector which is it dashed line hero",
    "03:00": ": wooded now got a message being sent to an object is basically a method belonging to the object itself that is being invoked for the toggle may",
    "03:10": ": toggle as a method exist in the light class thus you show the message by stating the actual methods signature to find in the class",
    "03:20": ": call its own method also by performing itself message sequence diagram should always be read top-down whether it is from left",
    "03:30": ": it depends as it mostly depends on how you place the participants objects the horizontal flow of the messages would be different so it can be",
    "03:40": ": or right to left depending on the sequence of the objects placed by that she definitely be red top down you have",
    "03:50": ": the real tight classes so instead of using the rectangular shaped to represent the objects you can also use the stereotype icon instead in the seat",
    "04:00": ": you'll notice that if you put it in its theory uptight format you would be able to know more information about the role of the classes here",
    "04:10": ": about activation boxes the activation boxes help you know with the start of the method audience as mentioned earlier tacos 'em",
    "04:20": ": like last so having this activation block means that at the start of the activation is also the starting of the method body",
    "04:30": ": i read there is a self call which caused the gets the message of itself which will also be a statement inside the method body itself",
    "04:40": ": the activation box this is also the end of the method body the activation boxes are important to understand and determined to start in",
    "04:50": ": into the methods boundaries in your malin in some you're not design tools you'll see two types of self message",
    "05:00": ": the shoe box which is called the south message into the other with two activation boxes with a shoulder was on top of the longer won",
    "05:10": ": s. h. rechristened messages also itself message to avoid any confusion and to simplify use it you alone",
    "05:20": ": message this is for the simple reason that it can clearly show where is the message coming from since the activation block will tell you where the bouncer",
    "05:30": ": if the message is being sent within the shorter box you'll know that it is within myself message method the night",
    "05:40": ": how to spin she ate the object by having to dashed arrow pointing to a participant object these two together will show whether it is",
    "05:50": ": orenstein she haitian you can put any input parameters inside the new to show the constructor that is being caught you can",
    "06:00": ": angular shape or the stinger type icons to represent the object when there's construction there's going to be the strachan is wow",
    "06:10": ": is represented by across at the end of the lifeline to show that the object is no longer in existence the cross in java code is simply to it",
    "06:20": ": no usually there's a class diagram before sequence diagram by the time you drop sequence diagram",
    "06:30": ": would already have been created and to find in the class diagram you can therefore map out the flow using these methods when you were",
    "06:40": ": diagrams you may discover new methods which you can use to modify the class diagrams and act on these methods class diagrams",
    "06:50": ": rams complement each other to make each of the diagrams complete on the message itself you have to be clear about what is being passed to",
    "07:00": ": and what is being returned every information that is being put into the sequence diagram must be traceable for example",
    "07:10": ": this case is a method of the order class because it is invoking into the sort of class therefore there should be a correlation in the crossfire",
    "07:20": ": define its methods signature for you to know what are the parameter types so today is the argument passed to the dispatch method and it is",
    "07:30": ": the return from this method is a bully and it'll be assigned to the resolve variable with the result itself you would want",
    "07:40": ": the dispatch manager class two people to hold on to the resolved returned so that it can be used the leader in the flow similarly",
    "07:50": ": mentioned in some part of the sequence diagram to understand where it comes from where it is created or where'd returns from him",
    "08:00": ": you can also show within the method perimeter of the eagle which will be assigned to the updated value of the method for the verify transactions my",
    "08:10": ": records is a very able declared in dispatch manager class which is passed to the verify transactions methods and will be assigned to value when the",
    "08:20": ": remember the idea of getting out or pass by reference he knew him at all you'll see the word called operation",
    "08:30": ": meaning as method and function just that in you and now is called operation and not method or function another three",
    "08:40": ": and he did not see any return message being shown in the diagram after messages didn't send it should be understood that there is always to return",
    "08:50": ": we got mr returned type is void of primitive or reference type return message is not shown if it does not providing it"
  },
  "slides": {
    "Slide 2": ": 00:10",
    "Slide 3": ": 03:40",
    "Slide 4": ": 04:30",
    "Slide 5": ": 05:30",
    "Slide 6": ": 05:50",
    "Slide 7": ": 06:30",
    "Slide 8": ": 07:00"
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