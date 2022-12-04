import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}
        />

        <GooglePlacesAutocomplete
          placeholder='Where from?'
          minLength={2}
          fetchDetails={true}
          returnKeyType='search'
          onPress={(data, details = null) => {

            console.log(details.geometry.location)
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }));

            dispatch(setDestination(null))
          }}
          enablePoweredByContainer={false}
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'es-419'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})