import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import SearchBar from '../components/SearchBar'
import SellersList from '../components/SellersList'

const Sellers = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headerView}>
            <View style={styles.searchIconView}>
              <EvilIcon name="search" size={30} color="black"/>
            </View>
            <View style={styles.searchView}>
                <SearchBar />
            </View>
        </View>
        <View style={styles.bodyView}>
          <SellersList />
        </View>
    </View>
  )
}

export default Sellers

const styles = StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: "#f8f9fa",
    },
    headerView: {
      // borderColor: 'yellow',
      // borderWidth: 5,
      height: 120,
      flexDirection: "row",
      justifyContent: "center",
    },
    titleView: {
      //  borderColor: 'black',
      //  borderWidth: 3,
    },
    searchIconView: {
      paddingTop: 64,
    },
    searchView: {
      // borderColor: 'black',
      // borderWidth: 3,
    },
    bodyView: {
      // borderColor: 'black',
      // borderWidth: 3,
      //height: '85%',
      flex: 1,
      //justifyContent: "space-evenly",
      //alignItems: "center",
      paddingTop: 10,
    },
})