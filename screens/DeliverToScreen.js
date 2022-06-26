import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

import AppHeader from '../components/AppHeader'

const DeliverToScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style= {tw`bg-white h-full`}>
      <AppHeader/>
      <View style={tw`h-2/3 p-5 pt-3`}>
        <Text>Hello, Clovis</Text>
        <Text style={{paddingTop: 25,fontSize: 25, fontWeight:'bold'}}>Where would you like us to deliver to today ?</Text>
      </View>
      <View style={tw`h-1/3 p-8 bg-lime-500 rounded-3xl`}>
        <TouchableOpacity style={tw`items-center p-2`} 
          onPress={()=> navigation.navigate("MapScreen")}>
          <View style={{ flexDirection: "row"}}>
            <Ionicons name="location" size={25} color="white" />
            <Text style={tw`text-white font-bold p-1`}>Set Location</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={tw`items-center p-4 m-3 bg-black rounded-3xl`} 
          onPress={()=>navigation.navigate("HomeScreen")}>
          <View style={{ flexDirection: "row"}}>
            {/* <Ionicons name="heart-outline" size={25} color="white" /> */}
            <Text style={tw`text-white font-bold pt-1`}> Saved Locations</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default DeliverToScreen