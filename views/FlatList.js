import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {

  static navigationOptions = {
    title: 'Tutorials',
};

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Tutorial 1'},
            {key: 'Tutorial 2'},
            {key: 'Tutorial 3'},
            {key: 'Tutorial 4'},
            {key: 'Tutorial 5'},
            {key: 'Tutorial 6'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   backgroundColor: '#e0aa0f',
   paddingTop: 22
  },
  item: {
    padding: 40,
    color: '#00386b',
    fontSize: 24,
    height: 44,
  },
})
