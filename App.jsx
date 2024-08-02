import React, { useState } from 'react'
import { Button, Text, Pressable, View, StyleSheet } from 'react-native'
const App = () => {
  return (
    <View style={styles.main}>
       
      <Pressable
        onPress={()=>{console.warn("Normal")}}// normal press
        onLongPress={()=>{console.warn("Long Press")}}// long press
        onPressIn={()=>{console.warn("In")}}//yani jab button ko daba k rkhyn gy...
        onPressOut={()=>{console.warn("Out")}}//yani jab button se finger uta lyn gy
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>

    </View>
  )
}
const styles=StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center"
  },
  pressableBtn:{
    fontSize:20,
    backgroundColor:"blue",
    borderRadius:20,
    margin:10,
    padding:10,
    color:"#fff",
    textAlign:"center",
    shadowColor:"#000",
    elevation:5
  }
})


export default App
