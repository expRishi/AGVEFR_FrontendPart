import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { makeRequest } from '../config/postData';
import { BASE_URL } from '../config/indexConfig';
import AsyncStorage from '@react-native-async-storage/async-storage'

// const names = [
//     {
//         no : "1",
//         name: "Hardware",
//     },
//     {
//         no : "2",
//         name: "Paint",
//     },
//     {
//         no : "3",
//         name: "Furniture",
//     },
//     {
//         no : "4",
//         name : "Vegetable",
//     },
// ]

const Category = ({ navigation }) => {
    const [res, setRes] = useState();

    const getCategoryList = async () => {
        const token = await AsyncStorage.getItem('token');

        await makeRequest(BASE_URL + '/categories', 'GET', token).then((response) => {
            setRes(response);
        }).catch(
            error => console.log(error)
        );
    };

    useState(() => {
        getCategoryList();
    }, []);

    const Item = ({ name, url }) => (
        <TouchableOpacity style={styles.box}>
            <Image source={{ uri: url }} style={styles.imgStyle} resizeMode="contain" />
            <Text style={styles.textStyle}>{name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.listView}>
        <FlatList
            data={res}
            renderItem={({ item }) => 
                <Item name={item.name} url={item.url} />
            }
            keyExtractor={(item) => item.name}
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "900",
    },
    container: {
        //borderColor: 'yellow',
        //borderWidth: 5,
        //height: "89%",
        flex: 1,
        //width: "100%",
        alignItems: "center",
    },
    container1: {
        borderColor: 'red',
        borderWidth: 5,
        //height: "25%",
        width: "100%",
        marginVertical: 15,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    // container2: {
    //     // borderColor: 'red',
    //     // borderWidth: 5,
    //     height: "25%",
    //     width: "100%",
    //     marginTop: 50,
    //     flexDirection: "row",
    //     justifyContent: "space-evenly",
    // },
    box: {
        //borderColor: 'grey',
        //borderWidth: 0.7,
        borderRadius: 40,
        padding: 25,
        width: '50%',
        //height: '100%',
        alignItems: "center",
    },
    imgView: {
        //borderColor: 'red',
        //borderWidth: 5,
        paddingTop: 5,
        // width: 140,
        alignItems: "center",
    },
    imgStyle: {
        //borderColor: 'red',
        //borderWidth: 5,
        width: '100%',
        height: undefined,
        //transform: [{ scale: 1 }],
        aspectRatio: 1,
        borderRadius: 30,
        //borderRadius: 10,
    },
    textView: {
        alignItems: "center",
    },
    textStyle: {
        color: "black",
        fontSize: 25,
        fontWeight: "900",
    },
    // listStyle: {
    //     padding: 2,
    //     margin: 2,
    // },
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
    navView: {
        borderColor: 'red',
        borderWidth: 5,
        //position: "absolute",
        flex: 1,
    },
})