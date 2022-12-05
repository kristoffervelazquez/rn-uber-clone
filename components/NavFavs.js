import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import tw from 'twrnc'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: 123,
        icon: "home",
        name: "Home",
        description: "Profra. Sara Thompson, El Cortijo Sección Pioneros, Hermosillo, Sonora, México",
        location: {
            "lat": 29.1491054,
            "lng": -110.9911757,
        },
    },
    {
        id: 456,
        icon: "briefcase",
        name: "Work",
        description: "Mérida, Yucatán, México",
        location: {
            "lat": 20.9673702,
            "lng": -89.5925857,
        },
    },
    {
        id: 696,
        icon: "heart",
        name: "Girlfriend",
        description: "Puerta Real, Hermosillo, Sonora, México",
        location: {
            "lat": 29.1178256,
            "lng": -111.0363537,
        },
    },
]

const NavFavs = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (<View style={[tw`bg-gray-200`, { height: 0.5 }]} />)}
        renderItem={({ item: { location, description, icon, id, name } }) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}
                onPress={() => {
                    dispatch(setDestination({
                        location: location,
                        description: description
                    }))
                    navigation.navigate('RideOptionsCard')

                }}
            >
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    size={18}
                    color='black'
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{name}</Text>
                    <Text style={tw`text-gray-500`}>{description}</Text>
                </View>
            </TouchableOpacity>
        )} />
}

export default NavFavs

const styles = StyleSheet.create({})