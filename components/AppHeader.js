import { View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const AppHeader = () => {
  return (
    <View style={tw`py-2 px-5 bg-white`}>
        <Image 
            style={{ 
                width: 80, 
                height: 50,
                resizeMode: 'contain',
            }}
            source={require('../assets/RuralAvocado.png')}
        />
    </View>
  )
}

export default AppHeader