import { StyleSheet, Text, View, Button, Image, ScrollView,Linking,FlatList,TouchableOpacity } from 'react-native'
import React,{useEffect, useState, useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Divider from 'react-native-divider';
import Ionicons from '@expo/vector-icons/Ionicons'
import {CartContext} from "../CartContext";
import { Link } from '@react-navigation/native';
import tw from 'twrnc'
import Header from '../components/Header';
import { useDispatch, useSelector } from "react-redux";
import { cartTotalSelector } from "../redux/selectors";

export function ConfirmAndPay ({navigation}){
    const total = useSelector(cartTotalSelector);
    // const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
    // function renderItem({item}){
    //     return(
    //         <>
    //             <View style={styles.cartLine}>
    //                 <Image style={styles.image} source={item.product.image} />
    //                 {/* <Text style={styles.lineLeft}>{item.product.name}  <Text style={styles.productTotal}> UGX {item.totalPrice}</Text></Text> */}
    //             </View>
    //         </>
    //     )
    // }
    
    return(
        <SafeAreaView>
            <Header title="Confirm and Pay"
             onPress={()=> navigation.navigate("CartScreen")}
            />
             <ScrollView style={styles.view}>
            <View style={{}}>
                <Text style={{fontSize:18}}>Your payment is protected by Hamlet group</Text>
            </View>
            <Divider></Divider>
            <Text style={{fontSize:18}}>Your Order</Text>
                <Text style={{fontSize:18}}>({total}) ITEMS</Text>
                <View>
                <TouchableOpacity
                onPress={()=> navigation.navigate("CartScreen")}>
                    <Text style={{alignSelf: 'flex-end',fontSize:18}}>Edit </Text>
                </TouchableOpacity> 
                
            </View>
            <Divider></Divider>
            <View>
                <Text style={{fontSize:18}}>Deliver To: {"\n"} munyonyo</Text>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Text style={{alignSelf: 'flex-end',fontSize:18}}>Edit </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Divider></Divider>
            {/* <View>
                <Text>Price Details</Text>
            </View>
            <Divider></Divider> */}
            <View>
                <Text style={{fontSize:18}}>Pay With</Text>
                <View style={styles.container}>
                  <Text>
                  <Image style={{ width: 60, height: 60 }} source={require('../assets/mtn1.png')} />MTN Mobile Money</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Ionicons style={{alignSelf: 'flex-end'}} name="add" size={25} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <Text>
                <Image style={{ width: 50, height: 60 }} source={require('../assets/airtel1.jpeg')} />Airtel Money</Text>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Ionicons style={{alignSelf: 'flex-end'}} name="add" size={25} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <Text style={{fontSize:20 }} >
                <Image style={{ width: 50, height: 70 }} source={require('../assets/credit1.png')} />Credit or Debit Card</Text>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Ionicons style={{alignSelf: 'flex-end'}} name="add" size={25} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <Text >
                <Image style={{ width: 50, height: 50 }} source={require('../assets/paypal.png')} />PayPal</Text>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Ionicons style={{alignSelf: 'flex-end'}} name="add" size={25} color="black" />
                  </TouchableOpacity>
                </View>
                <Divider></Divider>
                <Text style={{fontSize:18,fontWeight:'bold',textDecorationLine:'underline'}}>Enter ASM Coupon</Text>
                <Divider></Divider>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:18}}>Required for your delivery </Text>
                    <Text style={{fontWeight:'bold',fontSize:18}}>Phone Number </Text>
                    <Text style={{fontSize:18}}>Add and confirm your phone number {"\n"} to get trip updates.
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Text style={{alignSelf: 'flex-end', fontSize:18}}>Add</Text>
                  {/* <Ionicons style={{alignSelf: 'flex-end'}} name="add" size={25} color="black" /> */}
                  </TouchableOpacity>
                    
                </View>
                <Divider></Divider>
                <View>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Cancellation Policy</Text>
                    <Text style={{fontSize:18}}>Free cancellation before 1 March. Cancel before 20 Mar for patial refund.
                    <Text style={styles.hyperLink}
                         onPress={() => {Linking.openURL('')}}> Learn More</Text>
                    </Text>
                </View>
                <Divider></Divider>
                <View>
                    <Text style={{fontSize:18}}>By selecting the button below, I agree to
                        <Text style={styles.hyperLink}
                         onPress={() => {Linking.openURL('')}}> Madini's policy</Text>
                        <Text style={styles.hyperLink}
                        onPress={ () => {Linking.openURL('')}}>delivery and refund policy </Text>
                        <Text>and that Madini can</Text>
                        <Text style={styles.hyperLink}
                         onPress={ () => {Linking.openURL('')}}>charge my payment method</Text>
                        <Text>if items have been delivered on site.</Text>
                    </Text>
                </View>
                <View style={{marginBottom:50, marginTop:15}}>
                <TouchableOpacity style={tw`items-center p-2 p-4 m-3 bg-[#ef4444] rounded-3xl` }
             onPress={() => navigation.navigate('ConfirmAndPay')}>
              <Text style={tw`text-white font-bold p-1`}>CheckOut</Text>

            </TouchableOpacity>
                
                </View>
            </View>
            
        </ScrollView>
        </SafeAreaView>
    )
}

export default ConfirmAndPay

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        width: '50%',
        paddingVertical: 10
    },
    lineLeft: {
        fontSize: 20,
        lineHeight: 40,
        color: '#333333',
      },
      image: {
        width: 50,
        height: 50,
        margin: 5,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor:'red',
        borderRadius:'4',
        padding: 10
    },
    hyperLink:{
        color:'black',
        fontSize: 18,
        fontWeight:'bold'
    },
    view:{
        backgroundColor:'#ECFOF3',
        left:1,
        marginHorizontal:10
        
    },
    container:{
        flex:1,
        marginTop:5,
        marginHorizontal:10,
        marginBottom:10
    }

})