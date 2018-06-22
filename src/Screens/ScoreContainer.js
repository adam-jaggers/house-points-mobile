import React, { Component } from 'react';
import { View, Text, Button, AppState, StyleSheet, Image, Div} from 'react-native';
import HouseCrest from './HouseCrest'


export class ScoreContainer extends Component {

  render() {
    return (
        <View style={[this.props.style.houseBox, {flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 5}]}>

            <View style={{flex: 4, alignItems: 'center'}}>
                     <HouseCrest  style={this.props.style} houseIcon={this.props.houseIcon} />
           </View>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 50}}> {this.props.points} </Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={this.props.style.houseText} > {this.props.name} </Text>
            </View>

        </View>
        )

    }


}

export default ScoreContainer