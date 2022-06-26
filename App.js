import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DeliverToScreen from './screens/DeliverToScreen'
import MapScreen from './screens/MapScreen'
import HomeScreen from './screens/HomeScreen'
import ProductDetailScreen from './screens/ProductDetailScreen'
import CartScreen from './screens/CartScreen'

import AppHeader from './components/AppHeader'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='DeliverToScreen' component={DeliverToScreen}/>
            <Stack.Screen name='MapScreen' component={MapScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen}/>
            <Stack.Screen name='CartScreen' component={CartScreen}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}
