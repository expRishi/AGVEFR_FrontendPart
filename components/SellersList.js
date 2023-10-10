import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Widget from './Widget'
import Ionicon from 'react-native-vector-icons/Ionicons'

const SellersList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>SellersList</Text>

      <ScrollView style={styles.listView}>


      <View style={styles.storeContainer}>
            <View style={styles.imgView}>
                <Image 
                    style={styles.imgStyle}
                    source={{
                    uri: "https://lh5.googleusercontent.com/p/AF1QipOHUsVLF8CDB-dj7fk0dWXDzm5gn1Z1_djjyO_Z",
                    }}
                />
            </View>
            <View style={styles.box}>
                <TouchableOpacity>
                    <View style={styles.storeView}>
                        <Text style={styles.text}>Balaji Store</Text>
                        <Ionicon name="location" size={20} color="grey" />
                        <Text style={styles.distanceText}>1.4 km</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.storeContainer}>
            <View style={styles.imgView}>
                <Image 
                    style={styles.imgStyle}
                    source={{
                    uri: "https://content.jdmagicbox.com/comp/chandigarh/90/0172p172std6190/catalogue/sagar-paint-and-hardware-store-chandigarh-sector-18d-chandigarh-hardware-shops-20bo4.jpg?clr=",
                    }}
                />
            </View>
            <View style={styles.box}>
                <TouchableOpacity>
                    <View style={styles.storeView}>
                        <Text style={styles.text}>Sagar Paint & Hardware</Text>
                        <Ionicon name="location" size={20} color="grey" />
                        <Text style={styles.distanceText}>1.1 km</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.storeContainer}>
            <View style={styles.imgView}>
                <Image 
                    style={styles.imgStyle}
                    source={{
                    uri: "https://content.jdmagicbox.com/comp/guwahati/l8/9999px361.x361.110111213646.a2l8/catalogue/right-choice-ganeshguri-guwahati-hardware-shops-1qftjslnqm.jpg?clr=",
                    }}
                />
            </View>
            <View style={styles.box}>
                <TouchableOpacity>
                    <View style={styles.storeView}>
                        <Text style={styles.text}>Right Choice</Text>
                        <Ionicon name="location" size={20} color="grey" />
                        <Text style={styles.distanceText}>800 m</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.storeContainer}>
            <View style={styles.imgView}>
                <Image 
                    style={styles.imgStyle}
                    source={{
                    uri: "https://content.jdmagicbox.com/comp/purnia/p4/9999p6454.6454.170612162707.j6p4/catalogue/sangeeta-furniture-s-fittings-gulabbagh-purnia-hardware-shops-wcm1wdzskm.jpg",
                    }}
                />
            </View>
            <View style={styles.box}>
                <TouchableOpacity>
                    <View style={styles.storeView}>
                        <Text style={styles.text}>Sangeeta Furniture</Text>
                        <Ionicon name="location" size={20} color="grey" />
                        <Text style={styles.distanceText}>2.1 km</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.storeContainer}>
            <View style={styles.imgView}>
                <Image 
                    style={styles.imgStyle}
                    source={{
                    uri: "https://content3.jdmagicbox.com/comp/gurgaon/u1/011pxx11.xx11.160901164809.t9u1/catalogue/shri-ram-hardware-store-imt-manesar-gurgaon-hardware-shops-nisz4x95a1.jpg",
                    }}
                />
            </View>
            <View style={styles.box}>
                <TouchableOpacity>
                    <View style={styles.storeView}>
                        <Text style={styles.text}>Shri Ram Store</Text>
                        <Ionicon name="location" size={20} color="grey" />
                        <Text style={styles.distanceText}>3.3 km</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.storeContainer}>
            <View style={styles.imgView}>
                <Image 
                    style={styles.imgStyle}
                    source={{
                    uri: "https://content.jdmagicbox.com/comp/dehradun/g8/9999px135.x135.131206162559.n7g8/catalogue/khanuja-hardware-store-dehradun-city-dehradun-hardware-shops-atpr8d0.jpg",
                    }}
                />
            </View>
            <View style={styles.box}>
                <TouchableOpacity>
                    <View style={styles.storeView}>
                        <Text style={styles.text}>Khanuja Hardware</Text>
                        <Ionicon name="location" size={20} color="grey" />
                        <Text style={styles.distanceText}>1.7 km</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>


      </ScrollView>

      <Widget />

    </View>
  )
}

export default SellersList

const styles = StyleSheet.create({
    container: {
        //borderColor: 'yellow',
        //borderWidth: 5,
        //height: "89%",
        flex: 1,
        //width: "100%",
        alignItems: "center",
    },
    titleText: {
        fontSize: 20,
        fontWeight: "900",
    },
    listView: {
        flex: 1,
        //borderColor: 'red',
        //borderWidth: 5,
        marginTop: 20,
        marginBottom: 50,
    },
    storeContainer: {
        //borderColor: 'grey',
        //borderWidth: 1,
        //height: "25%",
        width: "100%",
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    imgView: {
        //borderColor: 'red',
        //borderWidth: 5,
        width: 120,
        alignItems: "center",
    },
    imgStyle : {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        borderRadius: 10,
    },
    box: {
        //borderColor: 'red',
        //borderWidth: 5,
        width: 180,

    },
    storeView: {
        padding: 5,
    },
    text: {
        fontSize: 30,
        fontWeight: "900",
    },
    distanceText: {

    },
})