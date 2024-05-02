import {Stylesheet, View, Text, Pressable} from "react-native"

function GoalItem({itemData, OnDeleteItem}){
    return(
        <Pressable>
        <View style={Stylesheet.goalsItem}>
            <Text style={Styles.goalText}>{itemData}</Text>
        </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding:8,
        borderRadius: 6,
        backgroundColor: '#8576FF',
        color: 'white'
    },
    goalText: {
        color: 'white'
    }
})