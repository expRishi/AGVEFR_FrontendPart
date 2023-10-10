import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import {BASE_URL} from '../config/indexConfig'
import {postData} from '../config/postData'
//import {sendError} from '../services/errorLogging';
//import { getHash } from 'react-native-otp-verify'

const Auth = ({navigation}) => {

    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // useEffect(() => {
    //     getHash().then(hash => {
    //         // use this hash in the message.
    //         console.log("this is hash: ", hash);
    //         sendError(hash);''
    //     }).catch(console.log);
    //   }, []);

    function resetError() {
        setError('');
      }

      const resetErrorTimeout = () => {
        setTimeout(() => {
          setError('');
        }, 2000);
      };


    const onSendOtp = () => {
        if(phone === ''){
            setError('it should a valid phone number');
            resetErrorTimeout();
            return;
        }
        console.log(phone);
        setLoading(true);
        postData(BASE_URL + '/auth/phone?user_phone=' + phone)
        .then((data1) => {
            console.log("data1", data1);
            setLoading(false);
            navigation.navigate("Otp", {phone: phone});
            // if (data.status !== '0') {
            //   setError(data.detail);
            //   resetErrorTimeout();
            //   return null;
            // } else {
            //   navigation.navigate("Otp", {phone: phone});
            // }
          })
          .catch((error) => {
            console.log(1);
            setLoading(false);
            setError('we ran into some problem try again later');
            //sendError(String(error));
            // error => console.log(error);
          });
    }



  return (
    <View style={styles.container1}>
      <Image style={styles.imgStyle} source={require("../assets/IMG-0029.png")} />
      <View style={styles.container2}>
            <Text style={styles.textStyle}>Mobile Number</Text>
            <TextInput
                style={styles.inputStyle}
                //keyboardType="phone-pad"
                placeholder="Enter Your Mobile No."
                autoFocus = {true}
                onChangeText={setPhone}
                value={phone}
                onKeyPress={resetError}
                //caretHidden={true}
                inputMode='numeric'
            />
            <TouchableOpacity 
                style={[styles.btn, {backgroundColor: phone.length !== 10 ? 'grey' : "#B0D9B1"}]}
                disabled = {loading || phone.length !== 10} 
                onPress={onSendOtp}>
                <Text style={styles.btnText}>Get OTP</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
    imgStyle: {
        marginTop: 30,
        alignSelf: "center",
        width: 300,
        height: 300,
    },
    container1: {
        //borderColor: 'yellow',
        //borderWidth: 5,
        //flex: 1,
        height: "100%",
        alignItems: "center",
        bottom: "0%",
        backgroundColor: "#EEEEEE",
    },
    container2: {
        //borderColor: 'red',
        //borderWidth: 5,
        flex: 1,
        width: "90%",
        alignItems: "center",
        marginVertical: 40,
    },
    textStyle: {
        fontSize: 23,
        fontWeight: "900",
    },
    inputStyle: {
        height: 65,
        borderColor: '#9EDDFF',
        borderWidth: 2,
        width: "80%",
        borderRadius: 10,
        textAlign: "center",
        marginTop: 20,
    },
    btn: {
        //backgroundColor: "#B0D9B1",
        width: '50%',
        padding: 30,
        borderRadius: 100,
        marginTop: 150,
    },
    btnText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "900",
    },
})




//phone.length !== 10 ? 'grey' : "rgba(0,184,148,1)",
//B0D9B1