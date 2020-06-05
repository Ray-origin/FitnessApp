import React, { Component } from 'react'
import{ StyleSheet, View, FlatList} from 'react-native'
import Items from '../Components/Items.js';
// import Details from './Details'

export default class ChooseLever extends React.Component{
  constructor(props){
    super(props);
    this.state={
      categories:[
        {id:1, name:'ABS_Beginner', src:'../Images/Girls/RuiLi.jpg'},
        {id:2, name:'CHEST_Beginner', src:'../Images/Girls/EP7ja1TU4AE3XbI.jpg'},
        {id:3, name:'ARM_Beginner', src:'../Images/Girls/one.jpg'},
        {id:4, name:'LEGS_Beginner', src:'../Images/Girls/bike.jpg'}
      ]
    };
  }
  render(){
      const {navigation} = this.props
      const {categories} = this.state
      return(
          <View>
            <FlatList
                data={categories}
                renderItems={({item}) => <Items ChangeID={item} onPress={() => navigation.navigate('Details')}/>}
                keyExtractor={item => `${item.id}`}
                containContainerStyle={style.container}
            />
          </View>
      )
  }
  
  
}
const style = StyleSheet.create({
  container:{
    paddingTop:16,
    paddingLeft:20,
    paddingRight:20,
  },
});
