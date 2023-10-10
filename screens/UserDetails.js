import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserDetails = ({navigation}) => {
    
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            console.log(await AsyncStorage.getItem('token'));
            // RNRestart.Restart();
            navigation.navigate("Auth");
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <View>
      <TouchableOpacity style={styles.just} onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({
    just: {
        paddingTop: 200,
        paddingLeft: 50,
    },
})