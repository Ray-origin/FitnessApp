import React from 'react';
import {
    Button,
    View,
    Text
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import Items from '../FitnessApp/Components/Items'
import Details from './Components/Details'
import ChooseLever from './Components/ChooseLever.js'
const AppNavigator = createStackNavigator();


function renderScreen (){
    return(
        <AppNavigator.Navigator 
            initialRouteName='../FitnessApp/Components/ChooseLever.js' screenOptions={{
            headerStyle:{
                backgroundColor:'#FE642E'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold',
            },
            headerTitleAlign:'center'
        }}
        >
            <AppNavigator.Screen
                name= "Home"
                components={ChooseLever}
            />
            <AppNavigator.Screen
                name= "Detail"
                components={Details}
            />
        </AppNavigator.Navigator>
    )
};

export default renderScreen