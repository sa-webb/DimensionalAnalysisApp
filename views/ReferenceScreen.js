import React, { Component } from 'react';
import { View, Image, ScrollView, Text, StyleSheet, Button, TouchableHighlight, Linking} from 'react-native';
import Home from '../App.js'

{/*This allows you to bold like you do in HTML*/}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

export default class ReferenceScreen extends Component {

    static navigationOptions = {
        title: 'REFERENCES',
    };

        render() {
        return (
            <ScrollView style={styles.contentContainer}>
                <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=DsTg1CeWchc') }>
                <View style={buttonStyles.button}>
                    <Text style={styles.buttonText}>Coversion Factor Video</Text>
                </View>
                </TouchableHighlight>
                <View style={styles.container}>
                    <Text style={styles.subtitleContainer}>
                        <B>Length</B>
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

                    <Text></Text>

                    <Text style={styles.subtitleContainer}>
                        <B>Area</B>
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

                    <Text></Text>

                    <Text style={styles.subtitleContainer}>
                        <B>Temperature</B>
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

                    <Text></Text>

                    <Text style={styles.subtitleContainer}>
                        <B>Volume</B>
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

                    <Text></Text>
                    <Text></Text>

                    <Text style={styles.subtitleContainer}>
                        <B>Weight</B>
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
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>

                    {/*Return to Main Menu Button*/}
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
                      <View style={buttonStyles.button}>
                        <Text style={buttonStyles.buttonText}>Return to Main Menu</Text>
                      </View>
                    </TouchableHighlight>

              </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: 'black',
     paddingTop: 22
    },
    titleContainer: {
        textAlign: 'center',
        fontSize: 24,
        color: '#00386b',
        // backgroundColor: '#9842f4',
    },
    labelContainer: {
        textAlign: 'center',
        fontSize: 28,
        color: 'white',
    },
    contentContainer: {
        paddingVertical: 10,
        backgroundColor: 'black',
    },
    subtitleContainer: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    subcontentContainer: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        paddingHorizontal: 5,
        paddingVertical: 2
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    button: {
        paddingLeft: 50,
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: 'white',
        flex:1,
        justifyContent:'center'
    },
    buttonText: {
        padding: 28,
        color: 'white'
    },

});

const buttonStyles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
    color: 'white'
  }
});
