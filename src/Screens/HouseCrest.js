import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image
} from 'react-native';

import ImageBackground from '../Components/ImageBackground'


export default class HouseCrest extends Component {
  render() {
    const resizeMode = 'center';

    return (
      <ImageBackground
        style={[{flex: 1, position: 'absolute', width: '100%', height: '100%', alignItems : 'center', justifyContent: 'center', paddingTop: 80}]}
        tintStyle = {this.props.style}
        source={require('../assets/shield.png')}
      >
        <Image style={{
                          flex: 1,
                          alignSelf: 'center',
                          width: '50%',
                          height: '50%'
                        }} resizeMode="contain" source={this.props.houseIcon}  />
      </ImageBackground>
    );
  }
}

//