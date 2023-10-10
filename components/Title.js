import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AgVeFR</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    container: {
        //headerTitleAlign: 'left',
        paddingTop: 50,
        //padding: 30,
    },
    title: {
        fontSize: 40,
        fontWeight: "900",
        color: "#000000",
        textShadowColor: "#00b4d8", // Shadow color
        textShadowOffset: { width:0, height: 1 }, // Shadow offset
        textShadowRadius: 6, // Shadow radius
        //borderColor: 'blue', // Border color
        //borderWidth: 2,
    },
})