import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Billing = () => {
  return (
    <View style={styles.container}>
      <Text>This is Billing screen</Text>
    </View>
  )
}

export default Billing

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 450,
    }
})