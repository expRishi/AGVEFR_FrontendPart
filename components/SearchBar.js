import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
// import EvilIcon from 'react-native-vector-icons/EvilIcons'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        caretHidden={true}
        //right = {<TextInput.EvilIcon name="search" size={30} color="black"/>}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    paddingTop: 57,
  },  
  searchBar: {
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        width: 190,
        borderRadius: 20,
        textAlign: "center",
    },
})