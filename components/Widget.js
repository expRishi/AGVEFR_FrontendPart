import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const Widget = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.box}>
        <TouchableOpacity>
            <AntDesign name="home" size={50} color="black" />
        </TouchableOpacity>
      </View>
        
      <View style={styles.box}>
        <TouchableOpacity>
            <AntDesign name="staro" size={50} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity>
            <AntDesign name="shoppingcart" size={50} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity>
            <Entypo name="menu" size={50} color="black" />
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
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "grey",
    },
    box: {
        //borderColor: 'black',
        //borderWidth: 3,
    },
})