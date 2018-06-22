import React, { Component } from 'react';
import { View, Text, Button, AppState, StyleSheet} from 'react-native';
import Header from '../Components/Header'
import ScoreContainer from './ScoreContainer'


export class Home extends Component {


  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      <Header name='Current Standings'/>
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
                  <ScoreContainer name='Bearclaw' points='85' houseIcon={require('../assets/animal_icons/bear.png')} style={houseOneStyles} />
                  <ScoreContainer name='Gryffindor' points='95' houseIcon={require('../assets/animal_icons/griffin.png')} style={houseTwoStyles} />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
                   <ScoreContainer name='Slytherine' points='100' houseIcon={require('../assets/animal_icons/cobra.png')} style={houseThreeStyles} />
                   <ScoreContainer name='Panthers' points='75' houseIcon={require('../assets/animal_icons/cat.png')} style={houseFourStyles} />
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
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -4, height: 4},
      textShadowRadius: 10
  },
  houseCrest: {
      tintColor : '#23415a'

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
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -4, height: 4},
      textShadowRadius: 10
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
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -4, height: 4},
      textShadowRadius: 10
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
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -4, height: 4},
      textShadowRadius: 10
  },
  houseCrest: {
        tintColor : '#808080'

      }
});