import { ScrollView, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import Category from '../components/Category'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Widget from '../components/Widget'

const Home = ({navigation}) => {
  return (
    <View style={styles.homeView}>
        <View style={styles.headerView}>
            <View style={styles.searchIconView}>
              <EvilIcon name="search" size={30} color="black"/>
            </View>
            <View style={styles.searchView}>
                <SearchBar />
            </View>
        </View>
        <View style={styles.bodyView}>
          <Category navigation={navigation}/>
          <Widget navigation={navigation}/>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeView: {
        // borderColor: 'red',
        // borderWidth: 5,
        height: '100%',
        //backgroundColor: "#f8f9fa",
      },
      headerView: {
        // borderColor: 'yellow',
        // borderWidth: 5,
        height: 120,
        flexDirection: "row",
        justifyContent: "center",
      },
      titleView: {
        //  borderColor: "black',
        //  borderWidth: 3,
      },
      searchIconView: {
        paddingTop: 64,
      },
      searchView: {
        // borderColor: "black',
        // borderWidth: 3,
      },
      bodyView: {
        // borderColor: "black',
        // borderWidth: 3,
        //height: '85%',
        flex: 1,
        paddingTop: 10,
      },
})