import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';


export default function App() {
  const Stack = createNativeStackNavigator();
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(() => {
  //   (async () => {
      
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);



  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='MapScreen' component={MapScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
