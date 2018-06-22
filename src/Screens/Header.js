import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Header extends Component {

  render() {
    return (
      <View style={{flex: -1, flexDirection: 'column'}}>
          <View style={{height: 10, backgroundColor: 'black'}} / >
          <View style={{alignItems: 'center', alignContent: 'center', height: 50, backgroundColor: 'powderblue'}} >
            <Text style={styles.heading}>{this.props.name}</Text>
          </View>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});