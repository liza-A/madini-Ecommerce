import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import SearchFilter from '../components/SearchFilter'
import { useState } from 'react'

const SearchScreen = (props) => {
    const[searchText,setSearchText] = useState();
  return (
    <View style={styles.container}>
      <SearchFilter searchText={searchText}  setSearchText={setSearchText}/>
      <Text>{searchText}</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundcolor: '#fff'
    }
})