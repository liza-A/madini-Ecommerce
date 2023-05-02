import { View, ImageBackground,Text,Image } from 'react-native'
import React from 'react'
import SearchFilter from '../components/SearchFilter'
import { getProducts } from "../services/ProductsService";
import tw from 'twrnc'
import { Button } from 'react-native'
import { SafeAreaView } from 'react-native';
import {useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native';
import dummyData from '../services/ProductsService';
import HorizontalSeperator from '../components/HorizontalSeperator';


const AppHeader = ({navigation}) => {
  
  return (
    <SafeAreaView 
    style={{
      height:130,
      width: '100%',
      // backgroundColor:'red',
      flexDirection:'row'
    }}
    >
      <ImageBackground style={{ 
                width: '100%', 
                height: 130,
                // resizeMode: 'contain',
                justifyContent:'center'
            }}
            source={require('../assets/rock.png')}
      > 
      {/* <View>
        <TouchableOpacity  onPress={()=> navigation.navigate("Profile")}>
        <Text style={{color:'white',textAlign:'right', fontSize: 17,  justifyContent: 'flex-end', marginRight:20}}>
          Bert
        </Text>
        </TouchableOpacity>
      </View> */}
      
      <View style={{flexDirection:'row', height:70, justifyContent:'space-evenly',  alignItems: 'center', marginHorizontal:20}}>
        <Text style={{color:'grey',  fontSize: 17, fontWeight: 'bold'}}>
          Artisans Impacted
        </Text>
        {/* <Image style={{ width: 60, height: 60 }} source={require('../assets/coins.png')} /> */}
        <View style={{height: '90%', width: 2,  backgroundColor: 'grey'}}></View>
        <Text style={{color:'grey',  fontSize: 17, fontWeight: 'bold'}}>
          Increased Revenues

        </Text>
      </View>
      <HorizontalSeperator/>
      {/* <SearchFilter data={dummyData.PRODUCTS} input ={input} setInput={setInput}/> */}
      </ImageBackground>
    </SafeAreaView>
  )
}

export default AppHeader