import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, Image, View, TextInput, TouchableHighlight } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

/**
 *  <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
            <View style={styles.submitButton}>
                <Text style={styles.Text}>Submit</Text>
            </View>
        </TouchableHighlight>
 */

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
export default class Submit extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Button title="Submit" />
            </ThemeProvider>
        )
    }
}

// const styles = StyleSheet.create({
//     submitButton: {
//         width: 250,
//         height: 50,
//         marginTop: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'blue',
//         borderColor: 'black',
//       },
//       Text: {
//         fontSize: 20,
//         color: 'white',
//         textAlign: 'center'
//       }
// })
