import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  clear,
  removeItem,
} from "../redux/features/cart/cartSlice";
import tw from 'twrnc'
import { cartTotalPriceSelector } from "../redux/selectors";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import  CartIcon  from '../components/CartIcon'
import { cartTotalSelector } from "../redux/selectors";
//import Header from component folder- this takes props


import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";

const amount = 0;

// import CartContainer from "../components/CartContainer";

const CartContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const AlertItem = () => {
    Alert.alert(
      "Are you sure you want to clear the cart?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(clear()) },
      ],
      { cancelable: false }
    );
  };

  const numberWithComma = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const renderStoreItems = ({ item, navigation }) => {
    return (
      
      <View style={styles.storeItem}>
        <View style={styles.storeItemImg}>
          <Image style={styles.storeItemImage} source={item.image } />
        </View>
        <View style={styles.storeItemInfo}>
          <Text style={styles.storeItemTitle}>{item.name}</Text>
          <Text style={{fontWeight:'normal',fontSize:18}}>Eligible for free shipping</Text>
          <Text style={styles.storeItemPrice}>
            {/* UGX{item.quantity * item.price} */}
            UGX{numberWithComma(item.quantity * item.price)}
          </Text>
          <View style={styles.addToCart}>
            <View style={styles.cartItemAmount}>
              <TouchableOpacity
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));

                    console.log("removed");
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}
              >
                <Ionicons name="md-remove" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.cartItemAmountText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increment(item.id));
                }}
              >
                <Ionicons name="md-add" size={24} color="black" />
              </TouchableOpacity>
            </View>
            
          </View>
          <View style={styles.cartItemRemove}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}
                style={styles.cartItemRemoveButton}
              >
                {/* <Ionicons name="md-trash" size={15} color="black" /> */}
                <Text style={{fontSize:20}}>Delete</Text>
              </TouchableOpacity>
              <View>
              <TouchableOpacity style={{backgroundColor:"white"}}>
                <Text style={{fontSize:20}}>Save for later</Text>
              </TouchableOpacity>
            </View>
            </View>
            
        </View>
      </View>
      
      
    );
  };

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={renderStoreItems}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View
            style={{
              // flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              alignSelf:'flex-end'
            }}
          >
            {/* <Text style={styles.storeItemTitle}>My Cart</Text> */}
           
            <TouchableOpacity onPress={AlertItem}>
              <Text style={styles.storeItemPrice}>Clear cart</Text>
            </TouchableOpacity>

            
          </View>
          
        )}
        ListFooterComponent={() => {
          return (
            <View style={styles.cartFooter}>
              <View style={styles.checkout}>
                {cart.length === 0 ? (
                  <Text style={styles.checkoutText}>Your cart is empty</Text>
                ) : (
                  <View style={styles.checkoutFull}>
                    <Text style={styles.checkoutText}>
                      {/* SubTotal: UGX{totalPrice} */}
                      SubTotal: UGX{numberWithComma(totalPrice)}
                    </Text>
                    <View>
          
        </View>

                    

                    {/* <Button
                      title="Checkout"
                      color="#ff5a5f"
                      onPress={() => {
                        // dispatch(checkout());
                      }}
                    /> */}
                    {/* <Button
                      onPress={() => goBack()}
                      title="Continue Shopping"
                    /> */}
                  </View>
                )}
              </View>
              <View style={{ height: 300 }} />
            </View>
          );
        }}
      />
    </View>
  );
};

const CartScreen = ({ navigation, item }) => {
  // const cart = useSelector((state) => state.cart);
  const total = useSelector(cartTotalSelector);
  return (
    <SafeAreaView>
       <Header title="Cart" onPress={()=> navigation.navigate("ProductDetailScreen")} />
       <TouchableOpacity style={tw`items-center p-2 p-2 m-3 bg-[#ef4444] rounded-3xl` }
          onPress={() => navigation.navigate('ConfirmAndPay')}>
          <Text style={tw`text-white font-bold p-1`}>Proceed to Buy (({total})items)</Text>
          </TouchableOpacity>
      <CartContainer />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  storeItemImg: {
    width: "35%",
    height: 80,
    borderRadius: 5,
    overflow: "hidden",
  },
  storeItemImage: {
    width: "100%",
    height: "100%",
  },
  storeItemInfo: {
    width: "70%",
    padding: 10,
  },
  storeItemTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  storeItemPrice: {
    fontSize: 20,
    color: "black",
  },
  addToCart: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor:"white"
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItemRemove: {
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
    flexDirection: "row",
  },
  cartItemRemoveButton: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:"white"
  },
  cartFooter: {
    justifyContent: "space-between",
  },
  checkoutText: {
    fontSize: 20,
    marginHorizontal:10
  }
});