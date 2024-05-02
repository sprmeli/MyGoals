import { useState } from "react";
import { View, TextInput, Button, Stylesheet } from "react-native"

function GoalInput ({onAddGoal}){
    const [enteredGoalText,setEnteredGoalText]= useState('')

    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }
    function AddGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log ('addGoalHandler')
    }
    return(
        <View style = {styles.inputContainer}>
        <TextInput
        style={styles.TextInput}
        placeholder='Your Goal!'
        onChangeText={handleInputGoal}
        value={enteredGoalText}
        />
        <Button
        title="Add Goal"
        color={'addGoalHandler'}
        />
        </View>

    )
}

export default GoalInput

const styles = Stylesheet.create({
   inputContainer: {
    felx:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alingItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF'
   },
   textInput:{}
})