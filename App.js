
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Colors,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import Settings from './src/Screens/Settings';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from 'react-navigation';


//export const HomeStack = StackNavigator({
//  Home: {
//    screen: Home,
//  },
//  Details: {
//    screen: Details,
//  },
//});


const AppNavigator = createBottomTabNavigator(
        {
            Home: Home,
            Settings: Settings,
          },
          {
            navigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                          iconName = 'home';
                        } else if (routeName === 'Settings') {
                          iconName = 'settings';
                        }

                return <Icon name={iconName} size={25} color={tintColor} />;
              },
            }),
            tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            },
          }
)

export default class App extends Component {
  render() {
    return (

        <AppNavigator />
    );
  }
}