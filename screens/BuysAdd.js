import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BuysAdd = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.bodyView}>
            <Text style={styles.textView}>Address & Contact</Text>
            <View style={styles.baseContainer}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Your Name"
                            autoFocus = {true}
                            caretHidden={true}
                            //inputMode='numeric'
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Phone Number"
                            autoFocus = {true}
                            caretHidden={true}
                            //inputMode='numeric'
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Flat No./House No."
                            autoFocus = {true}
                            caretHidden={true}
                            //inputMode='numeric'
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Street Name"
                            autoFocus = {true}
                            caretHidden={true}
                            //inputMode='numeric'
                        />
                        <Text style={styles.textView1}>
                            Lachit Nagar
                        </Text>
                        <Text style={styles.textView1}>
                            Guwahati, Assam
                        </Text>
                        <Text style={styles.textView1}>
                            Pin 781007
                        </Text>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={()=> navigation.navigate("Home")}
                        >
                            <Text style={styles.btnText}>Continue</Text>
                        </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default BuysAdd

const styles = StyleSheet.create({
    container: {
        //borderColor: "red",
        //borderWidth: 5,
        flex: 1,
        backgroundColor: "#EEEEEE"
    },
    bodyView: {
        flex: 1,
        margin: 50,
        marginTop: 130,
        alignItems: "center",
    },
    textView: {
        fontSize: 20,
        fontWeight: "900",
    },
    baseContainer: {
        //borderColor: 'red',
        //borderWidth: 5,
        //height: "25%",
        width: "100%",
        marginVertical: 10,
        alignItems: "center",
    },
    box: {
        //borderColor: 'red',
        //borderWidth: 5,
        
    },
    inputStyle: {
        height: 60,
        borderColor: '#191717',
        borderWidth: 1,
        fontSize: 18,
        width: "100%",
        borderRadius: 10,
        textAlign: "center",
        marginTop: 40,
    },
    textView1: {
        fontSize: 25,
        fontWeight: "900",
        color: "#451952",
        margin: 8,
        marginTop: 20,
    },
    btn: {
        width: '75%',
        padding: 30,
        borderRadius: 100,
        marginTop: 30,
        backgroundColor: "#B0D9B1"
    },
    btnText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "900",
    },
})