import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

import ImageBackground from '../Components/ImageBackground'


export default class HouseCrest extends Component {
  render() {
    const resizeMode = 'center';

    return (
      <ImageBackground
        style={[{flex: 1, position: 'absolute', width: '100%', height: '100%', justifyContent: 'center'}]}
        tintStyle = {this.props.style}
        source={require('../assets/shield.png')}
      >
        <Text
          style={{
            backgroundColor: 'transparent',
            textAlign: 'center',
            fontSize: 30,
            padding: 30,
          }}
        >
          .
        </Text>
      </ImageBackground>
    );
  }
}
