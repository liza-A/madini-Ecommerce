import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'


const Product = ({name, price, image, onPress}) => {
  return (
    <View>
    <TouchableOpacity onPress={onPress}
        style ={[tw`rounded-lg m-2 shadow-md`,{
            height: 160, width: 160, backgroundColor: '#fff'
        }]}
    >
        <View style={tw`px-2`}>
            <ImageBackground
                // source = { require('../assets/banana.png') }
                source = { image }
                resizeMode = 'contain'
            >
                <View style={tw`h-3/4`}></View>
                <View style={[tw`h-1/4 px-1`,{alignSelf: 'flex-end'}]}>
                    <TouchableOpacity style ={[tw`bg-blue-800 rounded-3xl content-center px-3 py-1`,{flexDirection:'row', width:75}]}>
                        <Ionicons name="basket" size={20} color="white" />
                        <Text style={tw`text-white font-bold py-1`}> Cart</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    </TouchableOpacity>
    <View style={tw`px-3 pl-4 mb-3`}>
        <Text>{name}</Text>
        <Text style={tw`font-bold text-lg`}>UGX{price}</Text>
    </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})