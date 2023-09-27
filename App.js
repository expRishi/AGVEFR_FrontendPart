import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>This is App.js screen</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 450,
  },
})