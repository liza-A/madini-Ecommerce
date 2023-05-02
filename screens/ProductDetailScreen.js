import { View, Text,Image,StyleSheet, ScrollView,SafeAreaView,Button, TouchableOpacity } from 'react-native';
import React, {useEffect, useState, useContext} from 'react'
// import { getProduct } from '../services/ProductsService';
import {CartContext} from "../CartContext";
import tw from 'twrnc'
import Header from '../components/Header';
import Ionicons from '@expo/vector-icons/Ionicons'
import  CartIcon  from '../components/CartIcon';
import dummyData from '../services/ProductsService';
// import PRODUCTS from '../services/ProductsService';
import HorizontalSeperator from '../components/HorizontalSeperator';
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export function ProductDetailScreen({route, navigation}) {
  const dispatch = useDispatch();

  // const {productId} = route.params;
  // 
  const[selectedItem, setSelectedItem] = useState([])
  useEffect(() => {
    let{selectedItem}=route.params
    setSelectedItem(selectedItem)
  }, [])

  // useEffect(() => {
  //     setSelectedItem(dummyData(selectedItem))
  // })

  // const {addItemToCart, removeFromCart} = useContext(CartContext);

  // function onAddToCart(){
  //   addItemToCart(selectedItem)
  // }

  // function onRemoveFromCart(){
  //   removeFromCart(selectedItem)
  // }



return (
  <SafeAreaView>
    <Header title="Item Description"
     onPress={()=> navigation.navigate("HomeScreen")}
    />
      <ScrollView>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={selectedItem?.image}  resizeMode='contain'/>
          </View>
          <View style={styles.infoContainer}>
              <Text style={styles.name}>{selectedItem?.name}</Text>
              <HorizontalSeperator/>
              <Text style={styles.description}>{selectedItem?.description}</Text>
              <HorizontalSeperator/>
              <Text style={{fontSize:20,}}>Use Case</Text>
              <Text style={styles.description}>{selectedItem?.UseCase}</Text>
              <HorizontalSeperator/>
              <View style={{marginTop:60}}> 
              <View style={styles.container}>
              <Text style={styles.price}> UGX{selectedItem?.price}</Text>
                <TouchableOpacity style={[tw`items-center py-2 px-4  bg-[#ef4444] rounded-3xl`, {flexDirection:'row',alignSelf:'flex-end'} ]}
                  onPress={() => {
                    dispatch(addToCart(selectedItem));
                  }}
                  >
                    <Ionicons name="cart-outline" size={30} color="white" />
                  <Text style={tw`text-white font-bold p-1`}>Add </Text>
                </TouchableOpacity>
              </View>
              <Text style={{fontSize:20,  fontWeight: '100', color: '#787878',}}>Free Delivery in Kampala</Text>
              </View>
          </View>
      </ScrollView>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between'
  }, 
  
  imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 200,
    height: 150,
    flex:1
  },
  infoContainer: {
    padding: 16
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:20
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginBottom: 4,
    justifyContent:'flex-end'
  },
  description: {
    fontSize: 20,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 30,
    marginTop:30
  },

// export function ProductDetailScreen(){
//   return (
//     <View>
//       <Text>ProductDetailScreen</Text>
//     </View>
//   )
// }


})