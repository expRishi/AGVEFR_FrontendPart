import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Auth from './screens/Auth';
import Otp from './screens/Otp';
import Home from './screens/Home';
import Sellers from './screens/Sellers';
import BuysAdd from './screens/BuysAdd';
import UserDetails from './screens/UserDetails';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator();

const App = () => {

  const [initialRoute, setInitialRoute] = React.useState(null);
  // const [token, setToken] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      setInitialRoute(token ? 'BuysAdd' : 'Auth');
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
