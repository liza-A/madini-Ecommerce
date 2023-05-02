import { StyleSheet, Text, View, TouchableOpacity,ScrollView,Button,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons'
import { getProducts } from "../services/ProductsService";
import { useState, useEffect } from 'react';
import Product from './Product';
import { FlatGrid } from 'react-native-super-grid';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ProductCategory({navigation}) {

//   function renderProduct({item: product}){
//     return(
//         <Product 
//             {...product}
//             onPress={() => {
//                 navigation.navigate('ProductDetailScreen', {productId: product.id})
//             }}
//         />
//     )
// }
// const [products, setProducts] = useState([]);

// useEffect(() => {
//     setProducts(getProducts())
// })

  // const [data, setData] = useState(getProducts);
  // const filterResult = (catItem) => {
  //   const result = getProducts.filter((curData) => {
  //     return curData.getProducts === catItem
  //   })
  //   setData(result)
  // }
    return (
      <SafeAreaView>
        <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={true}>
    <View style={{flexDirection: 'row', height: 60, padding:1}}>
    <Button onPress={() => filterResult('Construction')}           
      title="Construction"
      color="red"
      type="clear"
      image = {
        <Image style={{ width: 300, height: 59 }} source={require('../assets/logo.png')} />
      }
        

    />
    <View>
    <TouchableOpacity style={tw`items-center p-2`} onPress={()=> filterResult("")}>
      <View>
      <Image style={{ width: 50, height: 50 }} source={require('../assets/construction.png')} />
      </View>      
    </TouchableOpacity>
    
    </View>
    <TouchableOpacity style={tw`items-center p-2`} 
          onPress={()=> filterResult("")}>
            <Image style={{ width: 50, height: 50 }} source={require('../assets/construction.png')} />
    </TouchableOpacity>
    <TouchableOpacity style={tw`items-center p-2`} 
          onPress={()=> filterResult("")}>
            <Image style={{ width: 50, height: 50 }} source={require('../assets/construction.png')} />
    </TouchableOpacity>
    </View>
    </ScrollView>
    {/* <FlatGrid
     productDimension={160}
     spacing={5}
     keyExtractor={(item) => item.id.toString()}
     data={products}
     renderItem={renderProduct}
    /> */}
    
      </SafeAreaView>
    )
}

export default ProductCategory

const styles = StyleSheet.create({})