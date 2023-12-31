import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'

const Widget = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.box}>
        <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
            <AntDesign name="home" size={30} color="black" />
        </TouchableOpacity>
      </View>
        
      <View style={styles.box}>
        <TouchableOpacity>
            <AntDesign name="staro" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity>
            <Ionicon name="cart-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity onPress={()=> navigation.navigate("UserDetails")}>
            <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Widget

const styles = StyleSheet.create({
    container: {
        //borderColor: 'red',
        //borderWidth: 5,
        position: "absolute",
        bottom: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        //alignItems: "center",
        //backgroundColor: "grey",
        width: "100%",
        marginTop: 20,
    },
    box: {
        //borderColor: 'black',
        //borderWidth: 3,
    },
})