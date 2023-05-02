import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const HorizontalButton = ({selected,onPress,name,image}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Image style={{ width: 50, height: 40 }} source={image} />
        <Text style={{fontWeight:selected? 'bold': 'normal'}}>
           {name}
         </Text>
        </TouchableOpacity>
  )
}

export default HorizontalButton

const styles = StyleSheet.create({})