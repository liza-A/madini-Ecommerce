import { StyleSheet, Text, View,Button, ImageBackground,Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc'


const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw` h-full`}>
      <ImageBackground source={require('../assets/rock.png')}
          style={{width:'100%', height:'100%'}}></ImageBackground>
      <View style={ styles.centered}>
        <View>
        <Image style={{ width: 300, height: 59 }} source={require('../assets/logo.png')} />
        <Image style={{ width: 300, height: 30 }} source={require('../assets/logotext.png')} />
        </View>
        <Button style={styles.container}
          onPress={() => navigation.navigate('HomeScreen')}
          title="Get Started"
        />
      </View>
    </SafeAreaView>
  );
  
}

export default OnBoardScreen

const styles = StyleSheet.create({
    container: {
    //height: 39,
		//padding: 12,
		//borderRadius: 32,
		//flexDirection: 'row',
		//alignItems: 'center',
		//justifyContent: 'center'


    },
    centered: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "#ffc2c2",
    }

})