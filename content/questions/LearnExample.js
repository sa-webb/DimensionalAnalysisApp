import React, { Component } from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, Image, View, TextInput, TouchableHighlight } from 'react-native';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

import InputBar from '../../components/InputBar';
import Submit from '../../components/Submit';
import NextPrev from '../../components/ButtonRow';
export default class LearnExample extends Component {

  static navigationOptions = {
    title: 'PROBLEM ONE',
  };

  render() {
    return (
      <View style={styles.container}>

        <Image source={require('../../assets/PracticeQuestion.png')}
          style={{ width: 375 }}
          resizeMode="contain"
        />

        <InputBar/>

        <Submit/>

        {/* <NextPrev/> */}
        <View style={styles.parentContainer}>
              <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('LearnTwo') }>
                    <Text style={{ fontSize: 28, color: 'white' }}>      Previous</Text>
                </TouchableOpacity>
              </View>

              <View>
                  <Text style={styles.blankText}>spaces</Text>
              </View>

              <View style={styles.nextContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('LearnTwo')}>
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
    width: 150,
    height: 35,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
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