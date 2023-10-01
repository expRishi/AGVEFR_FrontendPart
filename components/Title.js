import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AGVEFR</Text>
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
    },
})