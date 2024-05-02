import { useState } from 'react'

import {Button, StyleSheet, Text, TextInput, View, ScrolView, FlatList } from 'react-native'

export default function App (){
  conts [entreGoalText, setEntreGoalText]=useState('')
  const [goals,setGoals]=useState([])

  function handleInputGoal(enteredText) {
    console.log(enteredText)
    setEntreGoalText(enteredText)
  }


  function handleAddGoal(){
    console.log(entredGoalText)
    setGoals(()=> [...goals,{text:entredGoalText, key: Math.random().toString()}])
  }

  return (
    <view style={style.container}>
      <view style={style.inputContainer}>
        <TextInput
        style={style.textInput}
        placeholder='Your Goal'
        onChangeText={hanldeInputGoal}
        />
      <Button
      title='Add Goal'
      color={'#A3FFD6'}
      onPress={handleAddGoal}
      />
      </view>
      <view syle={style.goalsContainer}>
        <FlatList
        data={goals}
        renderItem={ (itemData) => {
          <View style={style.goalsItem}>
            <text syle={StyleSheet.goalText}>
            {itemData.item.text}
            </text>
            </View>
        }}
        >
          </FlatList>
          </view>
          </view>
  );
}

const syles = SytleSheet.create ({
  container : {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 20,

  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alingItems: 'center',
    
marginBotton: 20,
    borderBottonWidth: 1,
    borderBottonColor: '#7BC9FF'
  },
  btnGoal:{
    borderRadius: 20,
    backgroundColor: '#cccccc'
  },
  textInput:{
    borderWidth: 1,
    borderColor: 'cccccc',
    width: 80,
    marginRigth:3,
    padding: 8,
    borderRadius: 5,
  },
  goalsContainer:{
    flex: 5,
  },
  goalsItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#8576FF',
    color: 'white'
  },
  goalText:{
    color: 'white'
  }

})