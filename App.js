import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Auth from './screens/Auth';
import Otp from './screens/Otp';
import Home from './screens/Home';
import Sellers from './screens/Sellers';
import BuysAdd from './screens/BuysAdd';
import MapScreen from './screens/MapScreen';
import UserDetails from './screens/UserDetails';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { makeRequest } from './config/postData';
import { BASE_URL } from './config/indexConfig';


const Stack = createStackNavigator();

const App = () => {

  const [initialRoute, setInitialRoute] = React.useState(null);
  // const [token, setToken] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await makeRequest(BASE_URL+'/auth/buyer/me', 'GET', token).then(async (response) => {
          const addresses = response.addresses
          if (addresses) {
            setInitialRoute('Home');
            await AsyncStorage.setItem('address_id', response.addresses[0].id.toString());
          } else {
            setInitialRoute('BuysAdd');
          }
        }).catch(
          error => console.log(error)
        );
      } else {
        setInitialRoute('Auth');
      }
      // setInitialRoute(token ? 'BuysAdd' : 'Auth');
      // await makeRequest(BASE_URL+'/auth/me', 'GET', token).then(async (response) => {
      //   console.log(response);
      //   // await AsyncStorage.setItem('address_id', response.id.toString());
      // });
    };

    checkLoginStatus();
    
  }, []);

  if (initialRoute === null) {
    return null; // Or a loading screen
  }

  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}} />
      <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}} />
      <Stack.Screen name="BuysAdd" component={BuysAdd} options={{headerShown:false}} />
      <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Sellers" component={Sellers} options={{headerShown:false}} />
      <Stack.Screen name="UserDetails" component={UserDetails} options={{headerShown:false}} />
    </Stack.Navigator>

    </NavigationContainer>

    // token ? (
    //   <NavigationContainer>
    //   <MyStack1 token={token}/>
    // </NavigationContainer>
    // ) : (
    //   <NavigationContainer>
    //   <MyStack2 token={token}/>
    // </NavigationContainer>
    // )
  )
}

export default App

const styles = StyleSheet.create({
  })
