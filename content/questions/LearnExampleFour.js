import React, { Component } from "react";
import { TouchableOpacity, TouchableHighlight, Platform, Button, StyleSheet, Text, View, TextInput, Alert, Image } from "react-native";

export default class LearnExampleFour extends Component {
    static navigationOptions = {
        title: 'PROBLEM FOUR',
      };
  constructor(props) {
      super(props)
      this.state = {
        TextInputValue: ''
      }
  }

  buttonClickListener = () => {
      const { TextInputValue }  = this.state ;
      if (TextInputValue == 1.6){
        Alert.alert(TextInputValue + " is the correct answer!");
        
      }
      else {
          Alert.alert("Incorrect :( Try Again!");
      }
  }
  render() {
    return (
    <View style={styles.container}>
        <Image source={require('../../assets/QuestionFour.png')}
          style={{ width: 375 }}
          resizeMode="contain"
        />

        <TextInput
          style={{ alignItems:'center', fontSize:24 , height: 50, width: 250, padding: 5, justifyContent: "center", backgroundColor:'white' }}
                  // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Answer"
          //set the value in state.
          onChangeText={TextInputValue => this.setState({TextInputValue})}
          // Making the Under line Transparent.
        />
          <TouchableOpacity 
          onPress={this.buttonClickListener}
          style={styles.button5}
          >
        <Text style={{ fontSize: 28, color: 'white' }}> Check Answer </Text>
       </TouchableOpacity>

        <View style={styles.parentContainer}>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('LearnThree') }>
                    <Text style={{ fontSize: 28, color: 'white' }}>      Previous</Text>
            </TouchableOpacity>
              </View>

              <View>
                  <Text style={styles.blankText}>spaces</Text>
              </View>

              <View style={styles.nextContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{ fontSize: 28, color: 'white' }}>         Next</Text>
                </TouchableHighlight>
            </View>
          </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: 'white',
    },
    item: {
      padding: 40,
      color: 'white',
      fontSize: 24,
      height: 44,
    },
    buttonrow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'green',
      
    },
    button: {
      marginBottom: 10,
      width: 260,
      alignItems: 'center',
      backgroundColor: 'blue'
    },
    button5: {
        alignItems: 'center',
        padding: 5,
        width: 250,
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
      },
    button2: {
      width: 250,
      height: 35,
      marginTop: 50,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue'
    },
    submitButton: {
                width: 250,
                height: 50,
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
                borderColor: 'black',
              },
              Text: {
                fontSize: 20,
                color: 'white',
                textAlign: 'center'
              },
    buttonText: {
      fontSize: 20,
      padding: 20,
      color: 'white',
      textAlign: 'center'
    },
    Text: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center'
    },
    parentContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  buttonContainer: {
      width: 175,
      height: 46,
      backgroundColor: 'blue',
      justifyContent: 'center',
  },
  nextContainer: {
      width: 175,
      height: 46,
      backgroundColor: 'blue',
      justifyContent: 'center',
  },
  blankText: {
      color: 'white',
  }
  });