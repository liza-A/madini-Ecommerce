import React, {useContext} from "react";
import {View, Text, StyleSheet, Image,TouchableOpacity} from "react-native";
// import { CartContext } from "../CartContext";
import Ionicons from '@expo/vector-icons/Ionicons'
import tw from 'twrnc'
import { useDispatch, useSelector } from "react-redux";
import { cartTotalSelector } from "../redux/selectors";

const CartIcon = (props) => {
	const total = useSelector(cartTotalSelector);
	return(
		<TouchableOpacity
		style={{ flexDirection: "row" }}
		onPress={props.onPressCart}
	  >
		<Ionicons name="cart-outline" size={40} color="red" />
		<View
		  style={{
			flexDirection: "column",
			// backgroundColor: "yellow",
			height: 20,
		  }}
		>
		  <Text style={{ color: "black", fontSize: 12 }}>{total}</Text>
		</View>
	  </TouchableOpacity>
	)
   
}
export default CartIcon;
const styles = StyleSheet.create({
	container: {
		marginHorizontal: 120,
		backgroundColor: 'white',
		height: 39,
		padding: 12,
		borderRadius: 32,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 13
	}
})