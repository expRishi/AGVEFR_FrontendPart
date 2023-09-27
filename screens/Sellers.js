import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sellers = () => {
  return (
    <View style={styles.container}>
      <Text>This is Sellers screen</Text>
    </View>
  )
}

export default Sellers

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 450,
    },
})