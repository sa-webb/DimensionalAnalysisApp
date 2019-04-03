import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, Image, View, TextInput, TouchableHighlight } from 'react-native';

export default class InputBar extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' }
    }

    render() {
        return (
        <View style={{flexDirection:'row'}}>
         <View>
            <TextInput
                  style={{ alignItems:'center', fontSize:24 , height: 50, width: 250, padding: 5, justifyContent: "center", backgroundColor:'white' }}
                  placeholder="Enter Answer"
                  onChangeText = {(text) => this.setState({text})}
                  value = {this.state.text}
                  keyboardType = 'web-search'
            />
         </View>
        </View>
        )
    }

}