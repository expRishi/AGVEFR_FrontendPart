import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import {postData} from '../config/postData'
import {BASE_URL} from '../config/indexConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Otp = (props) => {

    const [otp, setOtp] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    // useEffect(() => {      
    //     startOtpListener(message => {
    //       // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
    //       const otp = /(\d{4})/g.exec(message)[1];
    //       setOtp(otp);
    //     });
    //     return () => removeListener();
    //   }, []);

      const onVerifyOtp = () => {
        // props.navigation.navigate("Name");
        // console.log("i was here");
        if(otp === ''){
            setError(translations['it should be a valid otp']);
            resetErrorTimeout();
            return;
        }
        setLoading(true);
        postData(BASE_URL + '/auth/buyer/otp?buyer_phone=' + props.route.params.phone + '&otp=' + otp)
        .then(
            async (data) => {
                console.log(data);
                await AsyncStorage.setItem('token', data.access_token);
                if(data.access_token){
                //     // this is when things fail
                //     setError(data.detail);
                //     resetErrorTimeout();
                //     setLoading(false);
                // } else {
                //     // here we need to login or register
                //     // console.log("This is user type: ", data.data.user.type);
                //     if(data.data.info === "old" && data?.data?.user?.type !== "U"){
                //         // login the user
                //         login(data.data.token);
                //     } else {
                        // register the user
                        props.navigation.navigate("BuysAdd",  {'loginData': data.data});
                        setLoading(false);
                }
                // else{
                //     setError("Wrong OTP");
                // }
                        // props.navigation.navigate("Name",  {'loginData': data.data});
                        // setLoading(false);
                // }
            }
        ).catch(
            error => console.log(error)
        )
    }

      function resetError() {
        setError('')
        }

    const resetErrorTimeout = () => {
        setTimeout(() => {
          setError('');
        }, 2000);
      };

  return (
    <View style={styles.container1}>
      <Image style={styles.imgStyle} source={require("../assets/IMG-0029.png")} />
      <View style={styles.container2}>
            <Text style={styles.textStyle}>OTP</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter the OTP"
                autoFocus = {true}
                onChangeText={setOtp}
                value={otp}
                onKeyPress={resetError}
                //caretHidden={true}
                inputMode='numeric'
            />
            <TouchableOpacity 
                style={[styles.btn, {backgroundColor: otp.length !== 4 ? 'grey' : "#B0D9B1"}]} 
                onPress={onVerifyOtp}
                spin={loading}
                disable = {loading || otp.length !== 4}
            >
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default Otp

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