import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, Image, View, TextInput, TouchableHighlight } from 'react-native';
import { ThemeProvider, Button, Alert } from 'react-native-elements';



export default class InputBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
          TextInputValue: ''
        }
    }

    buttonClickListener = () => {
        const { TextInputValue }  = this.state ;
        if (TextInputValue == 1){
          Alert.alert(TextInputValue);
        }
        else {
            Alert.alert("fuck");
        }
    }

    render() {
        return (
        <View style={{flexDirection:'row'}}>
         <View>
            <TextInput
                  style={{ alignItems:'center', fontSize:24 , height: 50, width: 250, padding: 5, justifyContent: "center", backgroundColor:'white' }}
                  placeholder="Enter Answer"
                  onChangeText={TextInputValue => this.setState({TextInputValue})}
                  keyboardType = 'web-search'
            />
            <Button
          onPress={this.buttonClickListener}
          title="Get Value"
          color="#00B0FF"
          />
            
         </View>
        </View>
        )
    }

}


const theme = {
    Button: {
      titleStyle: {
        color: 'white',
        fontSize: 32,
        width: 250,
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    colors: {
        primary: 'blue',
        secondary: 'grey',
      },
  };