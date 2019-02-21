import React, { Component } from 'react';
import { View, Image, ScrollView, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class ReferenceScreen extends Component {

    static navigationOptions = {
        title: 'References',
    };

    _onPressButton() {
        () => this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <ScrollView style={styles.contentContainer}>
                <View>
                    
                    <Text style={styles.subtitleContainer}>
                        Length
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 in = 2.54cm = 0.0254m
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 ft = 30.48cm = 0.3048m
                     </Text>

                    <Text style={styles.subcontentContainer}>
                        1 yard = 91.44cm = 0.9144m
                    </Text>


                    <Text style={styles.subtitleContainer}>
                        Area
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 in^2 = 6.4516cm^2
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 ft^2 = 0.0929m^2
                     </Text>

                    <Text style={styles.subcontentContainer}>
                        1 acre = 0.4047 hectares = 4047 m^2
                    </Text>

                    <Text style={styles.subtitleContainer}>
                        Temperature
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        F = C * 1.8 +32
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        C = (F - 32) / 1.8
                     </Text>

                    <Text style={styles.subcontentContainer}>
                        R = F + 459.67
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        K = C + 273.15
                    </Text>

                    <Text style={styles.subtitleContainer}>
                        Volume
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 in^3 = 16.387cm^3
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 ft^3 = 0.0283m^3
                     </Text>

                    <Text style={styles.subcontentContainer}>
                        1 us f.oz = 29.574ml
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 imp f.oz = 28.41ml
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 gal = 3.7854l
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 imp gal = 4.546l
                    </Text>

                    <Text style={styles.subtitleContainer}>
                        Weight
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 oz = 28.35g
                    </Text>

                    <Text style={styles.subcontentContainer}>
                        1 lb = 0.4536kg = 453.6g
                     </Text>

                    <Text style={styles.subcontentContainer}>
                        1 imp ton = 1016kg
                    </Text>
                    <Text></Text>

                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        textAlign: 'center',
        fontSize: 24,
        color: '#00386b',
        // backgroundColor: '#9842f4',
    },
    labelContainer: {
        textAlign: 'left',
        fontSize: 28,
        color: '#00386b',
    },
    contentContainer: {
        paddingVertical: 10,
        backgroundColor: '#e0aa0f',
    },
    subtitleContainer: {
        textAlign: 'left',
        fontSize: 22,
        color: '#00386b',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    subcontentContainer: {
        textAlign: 'left',
        fontSize: 16,
        color: '#00386b',
        paddingHorizontal: 5,
        paddingVertical: 2
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#FF5236'
    },
    button: {
        marginBottom: 50,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#00386b'
    },
    buttonText: {
        padding: 20,
        color: '#00386b'
    },

});