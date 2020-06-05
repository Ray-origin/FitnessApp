
import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../FitnessApp/AppNavigator.js'

export default class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    )
  };
}
