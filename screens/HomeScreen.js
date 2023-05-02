import { ScrollView, View, StyleSheet,Text,Image, ImageBackground,SectionList, FlatList,  Button} from 'react-native'
import React, {useEffect, useState} from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons'
import AppHeader from '../components/AppHeader'
import Product from '../components/Product'
import  {getProducts}  from "../services/ProductsService";
import { FlatGrid } from 'react-native-super-grid'
import SearchFilter from '../components/SearchFilter'
import {TouchableOpacity} from 'react-native'
import  CartIcon  from '../components/CartIcon'
import HorizontalButton from '../components/HorizontalButton';
import dummyData from '../services/ProductsService';
import HorizontalButton1 from '../components/HorizontalButton1';
import HorizontalSeperator from '../components/HorizontalSeperator';
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from 'react-native';
import { useRef } from 'react';
import Modal from "react-native-modal";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
 } from "react-native-popup-menu";




export function HomeScreen({navigation}){
  const dispatch = useDispatch();
  const[selectedSubCategory, setSelectedSubCategory]=useState('')
  const[selectedCategory, setSelectedCategory]=useState('Construction')
  const[product, setProduct]=useState([])
  const[search, setSearch]=useState([])
  const searchRef=useRef()
  
  useEffect(() => {
    let PRODUCTS= dummyData.PRODUCTS.filter(productItem => productItem.category == selectedCategory)
      setProduct(PRODUCTS)
  },[selectedCategory] )

  // useEffect(() => {
  //   let PRODUCTS= dummyData.PRODUCTS.filter(productItem => productItem.subCategory1 == selectedSubCategory)
  //     setProduct(PRODUCTS)
  // },[selectedSubCategory] )

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);


  const onSearch = text => {
    if (text==''){
      setProduct(dummyData.PRODUCTS)
    }
    else{
      let tempList = dummyData.PRODUCTS.filter(item => {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) >-1;
      })
      setProduct(tempList)
    }
   
  }
  const numberWithComma = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const Seperator = () => {
    return <View style={styles.separator} />;
  };


  function renderTopTabBarSection(){
    return(
      <View style={{
        flexDirection:'row',
        height: 60,
        justifyContent:'space-evenly',
        backgroundColor:'white'
      }}>
       
        {/* <HorizontalButton
        name='All'
        image={require('../assets/construction.png')}
        selected={selectedCategory == "Construction"}
        onPress={() => setProduct(dummyData.PRODUCTS)}
        /> */}
        <HorizontalButton
        name='Construction'
        image={require('../assets/construction.png')}
        selected={selectedCategory == "Construction"}
        onPress={() => setSelectedCategory("Construction")}
        />
        <HorizontalButton
        name="Industrial"
        image={require('../assets/excavator.jpg')}
        selected={selectedCategory == "Industrial"}
        onPress={() => setSelectedCategory("Industrial")}
        />
        <HorizontalButton
        name='Precious'
        image={require('../assets/diamond.jpg')}
        selected={selectedCategory == "Precious"}
        onPress={() => setSelectedCategory("Precious")}
        />

      </View>
    )
  }
  function renderTopTabBarSection1(){
    return(
      <View style={{
        flexDirection:'row',
        height: 40,
        justifyContent:'space-evenly',
        backgroundColor:'white'
      }}>
        
        <HorizontalButton1
        name='Sand'
        selected={selectedSubCategory == "Sand"}
        onPress={() => setSelectedSubCategory("Sand")}
        />
        <HorizontalButton1
        name="Aggregate"
        selected={selectedSubCategory == "Aggregate"}
        onPress={() => setSelectedSubCategory("Aggregate")}
        />
        <HorizontalButton1
        name='Earth'
        selected={selectedSubCategory == "Earth"}
        onPress={() => setSelectedSubCategory("Earth")}
        />
         <HorizontalButton1
        name='Dimension Stones'
        selected={selectedSubCategory == "Dimension Stones"}
        onPress={() => setSelectedSubCategory("Dimension Stones")}
        />

      </View>
    )
  }

  const ListHeader = () => {
    return(
      <View>
        <Text>Value Add</Text>
      </View>
    )
  }
  

  return(
    <View style={styles.container1}>
      <AppHeader
      navigation={navigation}/>
      <View style={{ margin: 10}}>
      <TextInput 
      ref={searchRef}
      value={search} 
      onChangeText={txt => {setSearch(txt)
      onSearch(txt)
      }}
      placeholder='Search'
      style={{height:40,  
      backgroundColor:'#2222221A',
      padding: 10,
      borderRadius: 30,
      borderWidth: 1,}}
      />
      {/* {search == ''? null : (
        <TouchableOpacity style={{marginRight:15,}}
        onPress={() => {
          searchRef.current.clear();
          setSearch('')
        }}>
          <Ionicons style={{ marginRight:15}} name='close-outline' size={20} />
        </TouchableOpacity>
      )} */}
      <Ionicons  style={{ position: 'absolute',right: 15,}} name='search' size={20} />
     
    </View>
      {renderTopTabBarSection()}
      <HorizontalSeperator/>
      {renderTopTabBarSection1()}
      <View style={[tw`py-1`]}>
          </View>
         
           <FlatList
            //  columnWrapperStyle={{justifyContent: 'space-between', marginHorizontal:10}}
             productDimension={160}
             horizontal={true}
            // numColumns={2}
             spacing={5}
             keyExtractor={(item) => item.id.toString()}
             data={product}
             renderItem={({item, index}) => {
              return(
                <View style={{}}>
                  <TouchableOpacity
                style ={[tw`rounded-lg m-2 shadow-md`,{
                  height: 160, width: 160, backgroundColor: '#fff'}]}
                onPress={() =>navigation.navigate ("ProductDetailScreen", {selectedItem:item})}
                >
                  <View style={tw`px-2`}>
                <ImageBackground
                source = { item.image }
                resizeMode = 'contain'>
                <View style={tw`h-3/4`}></View>
                
                </ImageBackground>
                
                </View>
                <View style={[tw`h-1/4 px-1`]}>
                <TouchableOpacity
                     onPress={() => {
                      dispatch(addToCart(item));
                    }}
                     style ={[tw`bg-[#e2e8f0] rounded-3xl content-center px-3 py-1`,{flexDirection:'row', width:75, alignSelf: 'flex-end'}]}>
                        <Ionicons name="cart-outline" size={20} color="black" />
                        <Text style={tw`text-black font-bold py-1`}> Add</Text>
                    </TouchableOpacity> 

                    {/* <TouchableOpacity
                     onPress={() => {handleModal}}
                     style ={[tw`bg-[#e2e8f0] rounded-3xl content-center px-3 py-1`, {width:75}]}>
                        <Text style={tw`text-black font-bold py-1`}> Value Add</Text>
                        
                    </TouchableOpacity>  */}
                    
                </View>

                
                </TouchableOpacity>

                
                
                <View style={tw`px-3 pl-4 mb-3`}>
        <Text>{item.name}</Text>
        <Text style={tw`font-bold text-lg`}>UGX{numberWithComma(item.price)}
        </Text>
    </View>
                </View>
              )
             }}
            />
            {/* <FlatList style={{flex:2}}
            ListHeaderComponent={ListHeader}
            productDimension={160}
             horizontal={true}
             spacing={5}
             keyExtractor={(item) => item.id.toString()}
             data={product}
             renderItem={({item, index}) => {
              return(
                <View style={{}}>
                  <TouchableOpacity
                style ={[tw`rounded-lg m-2 shadow-md`,{
                  height: 160, width: 160, backgroundColor: '#fff'}]}
                onPress={() =>navigation.navigate ("ProductDetailScreen", {selectedItem:item})}
                >
                  <View style={tw`px-2`}>
                <ImageBackground
                source = { item.image }
                resizeMode = 'contain'>
                <View style={tw`h-3/4`}></View>
                
                </ImageBackground>
                
                </View>
                <View style={[tw`h-1/4 px-1`,{alignSelf: 'flex-end'}]}>
                <TouchableOpacity
                     onPress={() => {
                      dispatch(addToCart(item));
                    }}
                     style ={[tw`bg-[#e2e8f0] rounded-3xl content-center px-3 py-1`,{flexDirection:'row', width:75}]}>
                        <Ionicons name="cart-outline" size={20} color="black" />
                        <Text style={tw`text-black font-bold py-1`}> Add</Text>
                    </TouchableOpacity> 
                </View>
                </TouchableOpacity>
                
                <View style={tw`px-3 pl-4 mb-3`}>
        <Text>{item.name}</Text>
        <Text style={tw`font-bold text-lg`}>UGX{numberWithComma(item.price)}
        </Text>
    </View>
                </View>
              )
             }}
            /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    categoriesListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
      categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
      },

      headerFooterStyle: {
        flex :1,
        flexDirection: 'column',
        // width: '100%',
        // height: '100%',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
      },
      container:{
        flex:1,
        marginTop:10,
        marginBottom:40,
        marginHorizontal:10
    },
    separator:{
      padding: 30,
      marginVertical: 1,
      borderBottomColor:'red'
    },
    container1:{
      flex:1
    }
  
});



// const HomeScreen = () => {
//   const [items, setItems] = React.useState([
//     { price: 'Shs. 12,000', desc: 'Tray of Eggs', qty: '12 Eggs', frm: 'Musa\'s Farm', pdtImg: require('../assets/products/eggs.jpeg') },
//     // { price: 'Shs. 8,000', desc: 'Tomato Ketchup', qty: '300 ml', frm: 'Heinz', pdtImg: require('../assets/products/ketchup.jpeg') },
//     // { price: 'Shs. 5,000', desc: 'Bread Spread', qty: '30 Oz', frm: 'Country Crock', pdtImg: require('../assets/products/breadspread.jpeg') },
//     // { price: 'Shs. 3,000', desc: 'Fresh Milk', qty: '1 Litre', frm: 'Jesa Milk', pdtImg: require('../assets/products/milk.jpeg') },
//     // { price: 'Shs. 2,000', desc: 'Sweet Bread', qty: '1 Loaf', frm: '21 Bakery Street', pdtImg: require('../assets/products/bread.jpeg') },
//     // { price: 'Shs. 10,000', desc: 'Pringle', qty: '5.2 Oz', frm: 'Mr. Pringles', pdtImg: require('../assets/products/pringles.jpeg') },
//   ]);

//   return (
//     <SafeAreaView style= {tw`bg-white h-full`}>
//       <ScrollView>
//       <AppHeader/>
//       <Advert/>
//       <View style={tw`py-1`}></View>
//       <FlatGrid 
//          itemDimension={160}
//          spacing={5}
//          data={items}
//          renderItem={({ item }) => (
//           <Product
//             pdtImg  = { item.pdtImg }
//             price   = { item.price }
//             desc    = { item.desc }
//             qty     = { item.qty }
//             frm     = { item.frm }
//           />
//          )}
//       />
//     </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default HomeScreen