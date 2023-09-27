import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemDetails = () => {
  return (
    <View style={styles.container}>
      <Text>This is ItemDetails screen</Text>
    </View>
  )
}

export default ItemDetails

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 450,
    },
})