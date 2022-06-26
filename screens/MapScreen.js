import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import tw from 'twrnc'

import AppHeader from '../components/AppHeader'
import MapView, { Marker } from 'react-native-maps'

const MapScreen = () => {
  const mapStyle = [{
    "featureType": "landscape",
    "stylers": [{
            "hue": "#FFA800"
        },
        {
            "saturation": 0
        },
        {
            "lightness": 0
        },
        {
            "gamma": 1
        }
    ]
},
{
    "featureType": "road.highway",
    "stylers": [{
            "hue": "#53FF00"
        },
        {
            "saturation": -73
        },
        {
            "lightness": 40
        },
        {
            "gamma": 1
        }
    ]
},
{
    "featureType": "road.arterial",
    "stylers": [{
            "hue": "#FBFF00"
        },
        {
            "saturation": 0
        },
        {
            "lightness": 0
        },
        {
            "gamma": 1
        }
    ]
},
{
    "featureType": "road.local",
    "stylers": [{
            "hue": "#00FFFD"
        },
        {
            "saturation": 0
        },
        {
            "lightness": 30
        },
        {
            "gamma": 1
        }
    ]
},
{
    "featureType": "water",
    "stylers": [{
            "hue": "#00BFFF"
        },
        {
            "saturation": 6
        },
        {
            "lightness": 8
        },
        {
            "gamma": 1
        }
    ]
},
{
    "featureType": "poi",
    "stylers": [{
            "hue": "#679714"
        },
        {
            "saturation": 33.4
        },
        {
            "lightness": -25.4
        },
        {
            "gamma": 1
        }
    ]
}
]

  const [pin,setPin] = useState({
    latitude: 0,
    longitude: 0,
  })

  useEffect(()=>{
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }else{
        let location = await Location.getCurrentPositionAsync({})
        console.log(location)
        setPin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
      }
      

      
    })()
  },[])

  return (
    <SafeAreaView style= {tw`bg-white h-full`}>
      <AppHeader/>
      <View>
        <View style={tw`h-full`}>
         <MapView 
            style = { tw `flex-1` }
            customMapStyle = { mapStyle }
            // initialRegion = {
            //   {
            //     latitude: 0,
            //     longitude: 0,
            //     latitudeDelta: 0.006,
            //     longitudeDelta: 0.0066,
            //   }
            // }
            showsUserLocation={true}
         >
            <Marker 
              coordinate={pin}
              draggable={true}
              onDragStart={(e)=>{
                  console.log("Drag Start", e.nativeEvent.coordinate)
              }}
              onDragEnd={(e)=>{
                  console.log("Drag End", e.nativeEvent.coordinate)
              }}
            />
         </MapView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen