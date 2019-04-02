import React, { Component } from 'react';
import { Button, TouchableOpacity, View, StyleSheet, Text } from 'react-native';

export default class NextPrev extends Component {
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
              <TouchableOpacity>
                    <Text style={{ fontSize: 28, color: 'white' }}>      Previous</Text>
                </TouchableOpacity>
              </View>

              <View>
                  <Text style={styles.blankText}>spaces</Text>
              </View>

              <View style={styles.nextContainer}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 28, color: 'white' }}>         Next</Text>
                </TouchableOpacity>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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