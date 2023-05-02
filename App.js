// import React from 'react'
import {StyleSheet, View, Text} from "react-native";
import { Provider } from 'react-redux'
import  store  from './redux/store'
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardScreen from './screens/OnBoardScreen';
import DeliverToScreen from './screens/DeliverToScreen'
import MapScreen from './screens/MapScreen'
import {HomeScreen} from './screens/HomeScreen.js'
import {ProductDetailScreen} from './screens/ProductDetailScreen.js'
import {CartScreen} from './screens/CartScreen.js'
import { CartProvider } from "./CartContext.js";
import { CartIcon } from "./components/CartIcon.js";
import ConfirmAndPay from './screens/ConfirmAndPay'
import Header from './components/Header'
import Profile from './screens/Profile';
import Tabs from "./navigation/tabs";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Tabs/> */}
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'HomeScreen'} >
            {/* <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
            <Stack.Screen name='DeliverToScreen' component={DeliverToScreen}/>
            <Stack.Screen name='MapScreen' component={MapScreen}/> */}
            {/* <Stack.Screen name='Profile' component={Profile}/> */}
            <Stack.Screen name='HomeScreen' component={Tabs} options={{}}/>
            <Stack.Screen name='ConfirmAndPay' component={ConfirmAndPay} />
            <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen}  />
            {/* <Stack.Screen name='CartScreen' component={CartScreen}/> */}
          </Stack.Navigator>
      </NavigationContainer>
     </Provider>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})
