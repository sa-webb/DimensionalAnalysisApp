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
          {/*
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            <B>The following resources are recommended to help you better
            understand dimensional analysis and unit conversions:</B>
          </Text>

          <Text></Text>
          <Text></Text>
          */}

          <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
            <B>SCIENCE FUNDAMENTALS:</B>
          </Text>

          <Text></Text>

          {/*Scientific Calculator*/}
          <TouchableHighlight onPress={() => Linking.openURL('') }>
            <View style={buttonStyles.button}>
              <Text style={styles.buttonText}>Scientific Calculator</Text>
            </View>
          </TouchableHighlight>

          <Text></Text>
          <Text></Text>

          {/*Significant Figures*/}
          <TouchableHighlight onPress={() => Linking.openURL('') }>
            <View style={buttonStyles.button}>
              <Text style={styles.buttonText}>Significant Figures</Text>
            </View>
          </TouchableHighlight>

          <Text></Text>
          <Text></Text>

          {/*Scientific Notation*/}
          <TouchableHighlight onPress={() => Linking.openURL('') }>
            <View style={buttonStyles.button}>
              <Text style={styles.buttonText}>Scientific Notation</Text>
            </View>
          </TouchableHighlight>

          <Text></Text>
          <Text></Text>

          <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
            <B>DIMENSIONAL ANALYSIS & UNIT CONVERSIONS:</B>
          </Text>

          <Text></Text>

          {/*Dimensional Analysis Example 1*/}
          <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=DsTg1CeWchc') }>
            <View style={buttonStyles.button}>
              <Text style={styles.buttonText}>Dimensional Analysis Example 1</Text>
            </View>
          </TouchableHighlight>

          <Text></Text>
          <Text></Text>

          {/*Dimensional Analysis Example 2*/}
          <TouchableHighlight onPress={() => Linking.openURL('') }>
            <View style={buttonStyles.button}>
              <Text style={styles.buttonText}>Dimensional Analysis Example 2</Text>
            </View>
          </TouchableHighlight>

          <Text></Text>
          <Text></Text>


          {/*Unit Conversions*/}
          <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/watch?v=3VnPVGGYSvI') }>
            <View style={buttonStyles.button}>
              <Text style={styles.buttonText}>Unit Conversions</Text>
            </View>
          </TouchableHighlight>

          <Text></Text>
          <Text></Text>

          <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
            <B>STOICHIOMETRY:</B>
          </Text>

          <Text></Text>

          {/*Stoichiometry Introduction*/}
          <TouchableHighlight onPress={() => Linking.openURL('https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiome/modal/v/stoichiometry') }>
            <View style={buttonStyles.button}>
              <Text style={styles.buttonText}>Stoichiometry Introduction</Text>
            </View>
          </TouchableHighlight>

          <Text></Text>
          <Text></Text>

          {/*Stoichiometry Example 1*/}
          <TouchableHighlight onPress={() => Linking.openURL('https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiome/modal/v/stoichiometry-example-problem-1') }>
            <View style={buttonStyles.button}>
              <Text style={styles.buttonText}>Stoichiometry Example 1</Text>
            </View>
          </TouchableHighlight>

          <Text></Text>
          <Text></Text>

          {/*Stoichiometry Example 2*/}
          <TouchableHighlight onPress={() => Linking.openURL('https://www.khanacademy.org/science/chemistry/chemical-reactions-stoichiome/modal/v/stoichiometry-example-problem-2') }>
            <View style={buttonStyles.button}>
              <Text style={styles.buttonText}>Stoichiometry Example 2</Text>
            </View>
          </TouchableHighlight>

          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>

          {/*Return to Main Menu Button*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home') }>
            <View style={buttonStyles.mainButton}>
              <Text style={buttonStyles.buttonText}>Return to Main Menu</Text>
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
    color: 'black'
  }
})

const buttonStyles = StyleSheet.create({
  button: {
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold'
  },
  mainButton: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
    color: 'white'
  }
});
