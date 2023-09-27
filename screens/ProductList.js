import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductList = () => {
  return (
    <View style={styles.container}>
      <Text>This is ProductList screen</Text>
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 450,
    },
})