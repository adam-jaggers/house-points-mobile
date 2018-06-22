import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './Header'

export class Settings extends Component {

  render() {
  console.disableYellowBox = true;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
          <Header name='Settings' />
      </View>
    )
  }
};



export default Settings;