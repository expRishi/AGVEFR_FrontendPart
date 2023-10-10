import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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

const Category = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
          <ScrollView style={styles.listView}>
          <View style={styles.container1}>
            <View style={styles.box}>
                <TouchableOpacity onPress={()=> navigation.navigate("Sellers")}>
                    <MaterialCommunityIcon name="hammer-screwdriver" size={100} color="#B0D9B1" />
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Hardware</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={()=> navigation.navigate("Sellers")}>
                    <FontAwesome5 name="paint-roller" size={100} color="#B0D9B1"/>
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Paint</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container1}>
                <View style={styles.box}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Sellers")}>
                        <FontAwesome5 name="chair" size={100} color="#B0D9B1" />
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Furniture</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Sellers")}>
                        <FontAwesome5 name="carrot" size={100} color="#B0D9B1"/>
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Vegetable</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
          <View style={styles.container1}>
            <View style={styles.box}>
                <TouchableOpacity onPress={()=> navigation.navigate("Sellers")}>
                    <MaterialCommunityIcon name="fruit-watermelon" size={100} color="#B0D9B1" />
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Fruit</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={()=> navigation.navigate("Sellers")}>
                    <MaterialCommunityIcon name="bookshelf" size={100} color="#B0D9B1"/>
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Book</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container1}>
                <View style={styles.box}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Sellers")}>
                        <FontAwesome name="shopping-basket" size={100} color="#B0D9B1" />
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Grocery</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Sellers")}>
                        <MaterialCommunityIcon name="bottle-tonic" size={100} color="#B0D9B1"/>
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>Water Jar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
          </ScrollView>
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
        //borderColor: 'red',
        //borderWidth: 5,
        //height: "25%",
        width: "100%",
        marginVertical: 25,
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
        borderColor: 'grey',
        borderWidth: 0.7,
        borderRadius: 40,
        padding: 25,
        //textAlign: "center",
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
        //marginTop: 5,
        marginBottom: 50,
    },
    navView : {
        borderColor: 'red',
        borderWidth: 5,
        //position: "absolute",
        flex: 1,
    },
})