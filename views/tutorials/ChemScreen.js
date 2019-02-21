import React, { Component } from 'react';

import { View, Image, ScrollView, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class ChemScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.titleContainer}>
                    Step by Step 1 For Chem
                </Text>
                <Text style={styles.subtitleContainer}>
                    Tutorial 1
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        textAlign: 'center',
        fontSize: 24,
    },
    subtitleContainer: {
        textAlign: 'left',
        fontSize: 22,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },

});
