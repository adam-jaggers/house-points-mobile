import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Header extends Component {

  render() {
    return (
      <View style={{flex: -1, flexDirection: 'column'}}>
          <View style={{height: 10, backgroundColor: 'black'}} / >
          <View style={{alignItems: 'center', alignContent: 'center', height: 50, backgroundColor: '#696969'}} >
            <Text style={styles.heading}>{this.props.name}</Text>
          </View>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  bigblue: {
    color: '#708090',
    fontWeight: 'bold',
    fontSize: 30,
  },
  heading: {
    color: '#FFD700',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: {width: -4, height: 4},
          textShadowRadius: 10
  },
});