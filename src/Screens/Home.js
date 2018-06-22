import React, { Component } from 'react';
import { View, Text, Button, AppState, StyleSheet} from 'react-native';
import Header from './Header'
import ScoreContainer from './ScoreContainer'


export class Home extends Component {


  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      <Header name='Current Standings'/>
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
                  <ScoreContainer name='Ravenclaw' style={houseOneStyles} />
                  <ScoreContainer name='Gryffindor' style={houseTwoStyles} />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
                   <ScoreContainer name='Slytherine' style={houseThreeStyles} />
                   <ScoreContainer name='HufflePuff' style={houseFourStyles} />
          </View>
      </View>
      </View>
    )
  }
}

export default Home;


const houseOneStyles = StyleSheet.create({
  houseBox: {
    flex: 1,
    justifyContent:'center',
    alignItems : 'center',
    backgroundColor: 'steelblue'
  },
  houseText: {
      color: 'white',
      fontSize : 30,
      fontWeight: 'bold'
  },
  houseCrest: {
      tintColor : '#D3D3D3'

    }
});

const houseTwoStyles = StyleSheet.create({
  houseBox: {
    flex: 1,
    justifyContent:'center',
    alignItems : 'center',
    backgroundColor: '#800020'
  },
  houseText: {
      color: 'white',
      fontSize : 30,
      fontWeight: 'bold'
  },
  houseCrest: {
        tintColor : '#C0C0C0'

      }
});

const houseThreeStyles = StyleSheet.create({
  houseBox: {
    flex: 1,
    justifyContent:'center',
    alignItems : 'center',
    backgroundColor: '#006400',
  },
  houseText: {
      color: 'white',
      fontSize : 30,
      fontWeight: 'bold'
  },
  houseCrest: {
        tintColor : '#A9A9A9'

      }
});

const houseFourStyles = StyleSheet.create({
  houseBox: {
    flex: 1,
    justifyContent:'center',
    alignItems : 'center',
    backgroundColor: '#DAA520'
  },
  houseText: {
      color: 'white',
      fontSize : 30,
      fontWeight: 'bold'
  },
  houseCrest: {
        tintColor : '#808080'

      }
});