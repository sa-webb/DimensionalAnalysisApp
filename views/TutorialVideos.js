import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView, TouchableHighlight, Linking } from 'react-native';

{/*This allows you to bold like you do in HTML*/}
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

export default class FlatListBasics extends Component {

  static navigationOptions = {
    title: 'Tutorials',
};

  render() {
    return (
      <ScrollView style={styles.contentContainer}>
        <View style={styles.container}>

        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          <B>The following resources are recommended to help you better
          understand dimensional analysis and unit conversions:</B>
        </Text>

        <Text></Text>
        <Text></Text>

        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          <B>Khan Academy:</B>
        </Text>

        {/*Stoichiometry Introduction*/}
        <TouchableHighlight onPress={() => Linking.openURL('https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiome/modal/v/stoichiometry') } underlayColor="blue">
          <View>
            <Text style={styles.buttonText}>Stoichiometry Introduction</Text>
          </View>
        </TouchableHighlight>

        {/*Stoichiometry Example 1*/}
        <TouchableHighlight onPress={() => Linking.openURL('https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiome/modal/v/stoichiometry-example-problem-1') } underlayColor="blue">
          <View>
            <Text style={styles.buttonText}>Stoichiometry Example 1</Text>
          </View>
        </TouchableHighlight>

        {/*Stoichiometry Example 2*/}
        <TouchableHighlight onPress={() => Linking.openURL('https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiome/modal/v/stoichiometry-example-problem-2') } underlayColor="blue">
          <View>
            <Text style={styles.buttonText}>Stoichiometry Example 2</Text>
          </View>
        </TouchableHighlight>

        <Text></Text>
        <Text></Text>

        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          <B>YouTube:</B>
        </Text>

        {/*Tutorial 4*/}
        <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=DsTg1CeWchc') } underlayColor="blue">
          <View>
            <Text style={styles.buttonText}>Dimensional Analysis for Chemsitry</Text>
          </View>
        </TouchableHighlight>

        {/*Tutorial 5*/}
        <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=3VnPVGGYSvI') } underlayColor="blue">
          <View>
            <Text style={styles.buttonText}>Converting Units in Chemistry</Text>
          </View>
        </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   backgroundColor: 'black',
   paddingTop: 22
  },
  item: {
    padding: 40,
    color: '#00386b',
    fontSize: 24,
    height: 44,
  },
  contentContainer: {
      paddingVertical: 10,
      backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
    color: 'blue'
  }
})
