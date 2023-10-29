import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Widget from './Widget'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { makeRequest } from '../config/postData'
import { BASE_URL } from '../config/indexConfig'
import { unstable_act } from 'react/cjs/react.production.min'

const SellersList = (sellersData) => {

    // if (sellersData.sellersData) {
    //     console.log("sellersData.sellersData", sellersData.sellersData);
    // }


    const Item = ({ name, url }) => (
        <TouchableOpacity style={styles.box}>
            <View style={styles.imgView}>
                <Image source={{ uri: url }} style={styles.imgStyle} resizeMode="contain" />
            </View>
            <View style={styles.textView}>
                <Text style={styles.textStyle} numberOfLines={2} ellipsizeMode='tail'>{name}</Text>
            </View>
        </TouchableOpacity>
    ); 


if (sellersData.sellersData){
    console.log("sellersData.sellersData.sellers", sellersData.sellersData.sellers)
    return (
        <View style={styles.listView}>
            <FlatList
                data={sellersData.sellersData.sellers}
                renderItem={({ item }) => 
                    <Item name={item.name} url={item.image_url} />
                }
                keyExtractor={(item) => item.name}
                numColumns={1}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )    
}

}

export default SellersList

const styles = StyleSheet.create({
    listView: {
        flex: 1,
        //borderColor: 'red',
        //borderWidth: 5,
        width: '100%',
        marginBottom: 50,
        alignItems: "center",
        justifyContent: "center",
        //marginTop: 5,
    },
    box: {
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 45,
        //padding: 25,
        width: '100%',
        //height: '20%',
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        //shadowOffset: { width: -1, height: -1 },
        //shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 4,
    },
    imgView: {
        //borderColor: 'black',
        //borderWidth: 5,
        width: '45%',
        padding: 5,
    },
    imgStyle: {
        //borderColor: 'red',
        //borderWidth: 5,
        width: '100%',
        height: undefined,
        //transform: [{ scale: 1 }],
        aspectRatio: 1,
        borderRadius: 30,
    },
    textView: {
        //borderColor: 'black',
        //borderWidth: 5,
        width: '70%',
        alignItems: "baseline",
        padding: 25,
    },
    textStyle: {
        color: "black",
        fontSize: 35,
        fontWeight: "900",
    },
})