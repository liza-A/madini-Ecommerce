import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const DATA = [
    {
        id: "101",
        title: "Promo 1",
        image: require('../assets/advert/advert_2.jpg'),
        screen: "MapScreen",
    },
];

const Advert = () => {
  return (
    <FlatList 
        horizontal
        data={DATA}
        renderItem={({ item }) => (
            <TouchableOpacity 
                // onPress={()=> navigation.navigate(item.screen)}
                style={tw`rounded-lg`}
            >
                <View style={tw`rounded-lg`}>
                    <ImageBackground 
                        style={[{ height: 200 }, tw`items-center p-2 m-2 w-85`]}
                        source={ item.image }
                        resizeMode = 'cover' 
                    />
                </View>
            </TouchableOpacity>
        )}
   />
  )
}

export default Advert

const styles = StyleSheet.create({})