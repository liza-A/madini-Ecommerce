import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Header = ({title, onPress,}) => {
  return (
    <SafeAreaView 
    style={{
      height:60,
      width: '100%',
      backgroundColor:'white',
      flexDirection:'row',
      justifyContent:'space-between',
      // alignItems:'center'
    }}
    >
      <TouchableOpacity onPress={onPress} style={{marginTop:15}}>
      <Ionicons name="chevron-back-sharp" size={30} color="black" />
      </TouchableOpacity>
      <View style={{marginTop:15}}>
        <Text style={{fontSize:30, alignSelf:'center'}}>
           {title}
         </Text>
        </View>
    </SafeAreaView>
  )
}

export default Header