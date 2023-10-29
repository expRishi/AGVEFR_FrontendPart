import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import SearchBar from '../components/SearchBar'
import SellersList from '../components/SellersList'
import { makeRequest } from '../config/postData';
import { BASE_URL } from '../config/indexConfig';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Widget from '../components/Widget'

const Sellers = (props) => {

  const [sellersList, setSellersList] = useState();

  const getSellersList = async () => {
    const token = await AsyncStorage.getItem('token');
    const address_id = await AsyncStorage.getItem('address_id');

    await makeRequest(BASE_URL + '/sellers?category=' + props.route.params.name + '&address_id=' + address_id, 'GET', token).then((response) => {
      console.log('response', response);
      setSellersList(response);
    }).catch(
      error => console.log(error)
    );
  };

  useEffect((props) => {
    getSellersList(props);
  }, [])

  //console.log(sellersList);
  

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.searchIconView}>
          <EvilIcon name="search" size={30} color="black" />
        </View>
        <View style={styles.searchView}>
          <SearchBar />
        </View>
      </View>
      <View style={styles.bodyView}>
        <SellersList sellersData={sellersList}/>
        <Widget navigation={props.navigation} />
      </View>
    </View>
  )
}

export default Sellers

const styles = StyleSheet.create({
  container: {
    //borderColor: 'yellow',
    //borderWidth: 5,
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
    //borderColor: 'black',
    //borderWidth: 3,
    //height: '85%',
    flex: 1,
    //justifyContent: "space-evenly",
    //alignItems: "center",
    paddingTop: 10,
    //marginBottom: 50,
  },
})