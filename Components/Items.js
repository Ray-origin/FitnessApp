import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SV from '../Images/Girls/SV.jpg'
export default function ChooseLever (props) {
    const {onPress , ChangeID} = props;
        return (
           <TouchableOpacity activeOpacity={0.5}
            onPress={onPress}>
                <View style={style.container}>
                    <Text style={style.title}>{ChangeID.name}</Text>
                    <Image style={style.imageStyle} source={SV}/>
                </View>
           
           </TouchableOpacity>
        );
}

const style = StyleSheet.create({
    imageStyle:{
        height:120,
    },

    title:{
        textTransform:'uppercase',
        marginBottom:'8',
        fontWeight:'700'
    },

    container:{
        padding:20,
        backgroundColor:"#FF4000",
        marginBottom:16,
        elevation:1
    }   
})
