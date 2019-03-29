import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, Image, View, TextInput, TouchableHighlight } from 'react-native';


export default class Submit extends Component {
    render() {
        return (
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
            <View style={styles.submitButton}>
                <Text style={styles.Text}>Submit</Text>
            </View>
        </TouchableHighlight>
        )
    }
}