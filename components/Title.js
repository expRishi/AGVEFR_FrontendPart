import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text>This is Only for Title screen</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 450,
    }
})