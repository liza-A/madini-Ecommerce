import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useState,useEffect } from 'react'
import { FlatList } from 'react-native'
import dummyData from '../services/ProductsService'




const SearchFilter = ({item}) => {

  const [searchQuery, setSearchQuery]=useState("");


  const handleSearch= (text) => {
    setSearchQuery(text)
  };
  const filteredData = dummyData.PRODUCTS.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return (
    <View style={styles.container}>
      <TextInput value={searchQuery} onChangeText={handleSearch}
      placeholder='Search'
      style={styles.input}
      />
      <Ionicons  style={styles.icon} name='search' size={20} />
      <View>
        
        <FlatList 
        data= {filteredData} 
        // renderItem={({item}) }
        keyExtractor={(item) => item.id.toString}
        />
      </View>
    </View>
    
  )
}

export default SearchFilter

const styles = StyleSheet.create({
    container:{
        margin: 10,

    },
    input:{
        backgroundColor:'#2222221A',
        padding: 10,
        borderRadius: 30,
        borderWidth: 1,
    },
    icon: {
        position: 'absolute',
        right: 15,
      }
})