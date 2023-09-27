import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PaymentOp = () => {
  return (
    <View style={styles.container}>
      <Text>This is Payment Option screen</Text>
    </View>
  )
}

export default PaymentOp

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 450,
    }
})