import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import SearchBar from '../components/SearchBar'
import Category from '../components/Category'
//import Widget from '../components/Widget'
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'

const Home = () => {
  return (
    <View style={styles.homeView}>
        <View style={styles.headerView}>
            <View style={styles.titleView}>
                <Title />
            </View>
            <View style={styles.searchIconView}>
              <EvilIcon name="search" size={30} color="black"/>
            </View>
            <View style={styles.searchView}>
                <SearchBar />
            </View>
        </View>
        <View style={styles.bodyView}>
          <Category />
        </View>
        {/* <Icon name="menu" size={200} /> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeView: {
        // borderColor: 'red',
        // borderWidth: 5,
        height: '100%',
      },
      headerView: {
        // borderColor: 'yellow',
        // borderWidth: 5,
        height: 130,
        flexDirection: "row",
        justifyContent: "space-evenly",
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