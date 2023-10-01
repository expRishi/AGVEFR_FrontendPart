import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

    const names = [
        {
            no : "1",
            name: "Hardware",
        },
        {
            no : "2",
            name: "Paint",
        },
        {
            no : "3",
            name: "Furniture",
        },
        {
            no : "4",
            name : "Vegetable",
        },
    ]

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories</Text>
      {/* <FlatList 
        style={styles.listStyle}
        keyExtractor={(index) => {
            return index.no;
        }}
        data={names} renderItem= {( {item} ) => {
            //console.log(item.name);
                return (

                    <View style={styles.container1}>
                        <View style={styles.box}>
                                <TouchableOpacity>
                                    <MaterialCommunityIcon name="hammer-screwdriver" size={100} color="grey" />
                                    <View style={styles.textView}>
                                        <Text style={styles.textStyle}>Hardware</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>
                        <View style={styles.box}>
                                <TouchableOpacity>
                                    <FontAwesome5 name="paint-roller" size={97} color="grey"/>
                                    <View style={styles.textView}>
                                        <Text style={styles.textStyle}>Paint</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={styles.container1}>
                        <View style={styles.box}>
                            <TouchableOpacity>
                                <FontAwesome5 name="chair" size={100} color="grey" />
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle}>Furniture</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box}>
                            <TouchableOpacity>
                                <FontAwesome5 name="carrot" size={97} color="grey"/>
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle}>Vegetable</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.container1}>
                        <View style={styles.box}>
                                <TouchableOpacity>
                                    <MaterialCommunityIcon name="hammer-screwdriver" size={100} color="grey" />
                                    <View style={styles.textView}>
                                        <Text style={styles.textStyle}>Hardware</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>
                        <View style={styles.box}>
                                <TouchableOpacity>
                                    <FontAwesome5 name="paint-roller" size={97} color="grey"/>
                                    <View style={styles.textView}>
                                        <Text style={styles.textStyle}>Paint</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={styles.container1}>
                        <View style={styles.box}>
                            <TouchableOpacity>
                                <FontAwesome5 name="chair" size={100} color="grey" />
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle}>Furniture</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box}>
                            <TouchableOpacity>
                                <FontAwesome5 name="carrot" size={97} color="grey"/>
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle}>Vegetable</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
        }}
      /> */}









      <View style={styles.container1}>
        <View style={styles.box}>
            <TouchableOpacity>
                <MaterialCommunityIcon name="hammer-screwdriver" size={100} color="grey" />
                <View style={styles.textView}>
                    <Text style={styles.textStyle}>Hardware</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.box}>
            <TouchableOpacity>
                <FontAwesome5 name="paint-roller" size={97} color="grey"/>
                <View style={styles.textView}>
                    <Text style={styles.textStyle}>Paint</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container1}>
            <View style={styles.box}>
                <TouchableOpacity>
                    <FontAwesome5 name="chair" size={100} color="grey" />
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Furniture</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity>
                    <FontAwesome5 name="carrot" size={97} color="grey"/>
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Vegetable</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      <View style={styles.container1}>
        <View style={styles.box}>
            <TouchableOpacity>
                <MaterialCommunityIcon name="hammer-screwdriver" size={100} color="grey" />
                <View style={styles.textView}>
                    <Text style={styles.textStyle}>Hardware</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.box}>
            <TouchableOpacity>
                <FontAwesome5 name="paint-roller" size={97} color="grey"/>
                <View style={styles.textView}>
                    <Text style={styles.textStyle}>Paint</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.container1}>
            <View style={styles.box}>
                <TouchableOpacity>
                    <FontAwesome5 name="chair" size={100} color="grey" />
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Furniture</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity>
                    <FontAwesome5 name="carrot" size={97} color="grey"/>
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Vegetable</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View> */}
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
        // borderColor: 'yellow',
        // borderWidth: 5,
        height: "89%",
        //flex: 1,
        //width: "100%",
        alignItems: "center",
    },
    container1: {
        // borderColor: 'red',
        // borderWidth: 5,
        height: "25%",
        width: "100%",
        marginTop: 50,
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
        // borderColor: 'black',
        // borderWidth: 5,
        //textAlign: "center"
    },
    textView: {
        alignItems: "center",
    },
    textStyle: {
        color: "grey",
        fontSize: 25,
        fontWeight: "900",
    },
    listStyle: {
        padding: 2,
        margin: 2,
    },
})