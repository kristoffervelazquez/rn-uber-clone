import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavs from './NavFavs'
import { Icon } from '@rneui/base'


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const destination = useSelector(selectDestination)

    const ref = useRef(null);

    useEffect(() => {
        if (!destination) return;
        ref.current?.setAddressText(destination.description);
    }, [destination]);


    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, User</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        ref={ref}
                        placeholder='Where to?'
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType='search'
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }));
                            console.log({
                                location: details.geometry.location,
                                description: data.description
                            })

                            navigation.navigate('RideOptionsCard')
                        }}
                        enablePoweredByContainer={false}
                        styles={{
                            container: {
                                flex: 0,
                                backgroundColor: "white",
                                paddingTop: 20
                            },
                            textInput: {
                                fontSize: 18,
                                backgroundColor: '#DDDDDF',
                                borderRadius: 50
                            },
                            textInputContainer: {
                                paddingHorizontal: 20,
                                paddingBottom: 0
                            }
                        }}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'es-419'
                        }}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                    />
                </View>
                <NavFavs />
                <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-gray-100 border-t`}>
                    <TouchableOpacity
                        style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
                        onPress={() => navigation.navigate('RideOptionsCard')}
                    >
                        <Icon name='car' type='font-awesome' color='white' size={16} />
                        <Text style={tw`text-center text-white`}>Rides</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`flex flex-row w-24 px-4 py-3 rounded-full justify-between`}>
                        <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
                        <Text style={tw`text-center`}>Eats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})