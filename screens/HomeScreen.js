import { ScrollView, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'


import AppHeader from '../components/AppHeader'
import Product from '../components/Product'
import { FlatGrid } from 'react-native-super-grid'
import Advert from '../components/Advert'

const HomeScreen = () => {
  const [items, setItems] = React.useState([
    { price: 'Shs. 12,000', desc: 'Tray of Eggs', qty: '12 Eggs', frm: 'Musa\'s Farm', pdtImg: require('../assets/products/eggs.jpeg') },
    { price: 'Shs. 8,000', desc: 'Tomato Ketchup', qty: '300 ml', frm: 'Heinz', pdtImg: require('../assets/products/ketchup.jpeg') },
    { price: 'Shs. 5,000', desc: 'Bread Spread', qty: '30 Oz', frm: 'Country Crock', pdtImg: require('../assets/products/breadspread.jpeg') },
    { price: 'Shs. 3,000', desc: 'Fresh Milk', qty: '1 Litre', frm: 'Jesa Milk', pdtImg: require('../assets/products/milk.jpeg') },
    { price: 'Shs. 2,000', desc: 'Sweet Bread', qty: '1 Loaf', frm: '21 Bakery Street', pdtImg: require('../assets/products/bread.jpeg') },
    { price: 'Shs. 10,000', desc: 'Pringle', qty: '5.2 Oz', frm: 'Mr. Pringles', pdtImg: require('../assets/products/pringles.jpeg') },
  ]);

  return (
    <SafeAreaView style= {tw`bg-white h-full`}>
      <ScrollView>
      <AppHeader/>
      <Advert/>
      <View style={tw`py-1`}></View>
      <FlatGrid 
         itemDimension={160}
         spacing={5}
         data={items}
         renderItem={({ item }) => (
          <Product
            pdtImg  = { item.pdtImg }
            price   = { item.price }
            desc    = { item.desc }
            qty     = { item.qty }
            frm     = { item.frm }
          />
         )}
      />
    </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen