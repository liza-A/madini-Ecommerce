import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const HorizontalButton1 = ({selected,onPress,name}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={{fontWeight:selected? 'bold': 'normal'}}>
           {name}
         </Text>
        </TouchableOpacity>
  )
}

export default HorizontalButton1

const styles = StyleSheet.create({})