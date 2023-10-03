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
                    uri: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_584723932.jpg",
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
                    uri: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_584723932.jpg",
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
                    uri: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_584723932.jpg",
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
                    uri: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_584723932.jpg",
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
                    uri: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_584723932.jpg",
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