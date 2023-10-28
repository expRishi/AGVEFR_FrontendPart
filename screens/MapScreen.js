import React, { useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapMarker from '../components/MapMarker';
import { makeRequest } from '../config/postData';
import { BASE_URL } from '../config/indexConfig';
import AsyncStorage from '@react-native-async-storage/async-storage'


const MapScreen =(props) => {
  // console.log(props);
  const mapRef = useRef(null);
  const [location, setLocation] = React.useState({
    latitude: props.route.params.lat,
    longitude: props.route.params.lng,
    latitudeDelta: 0.000600,
    longitudeDelta: 0.000600,
  });

  const handleConfirm = async () => {
    const camera = await mapRef.current.getCamera();
    console.log(camera);
    if(camera){
      console.log(camera.center);
    setLocation({
      latitude: camera.center.latitude,
      longitude: camera.center.longitude,
      latitudeDelta: location.latitudeDelta,
      longitudeDelta: location.longitudeDelta,
    });
    console.log('Saved location:', camera.center.latitude, camera.center.longitude);
    }
    const token = await AsyncStorage.getItem('token');
    const body = {
        "name": props.route.params.name, 
        "phone_number": props.route.params.num, 
        "house": props.route.params.houseno, 
        "street": props.route.params.street, 
        "area": "Lachit Nagar", 
        "city": "Guwahati", 
        "pincode": "781007", 
        "lat": camera.center.latitude, 
        "lng": camera.center.longitude, 
    }
    await makeRequest(BASE_URL+'/address', 'POST', token, body).then(async (response) => {
        console.log(response);
        await AsyncStorage.setItem('address_id', response.id.toString());
    }).catch(
        error => console.log(error)
    );
    // const add_id = await AsyncStorage.getItem('address_id');
    props.navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={location}
        mapType="standard"
      />
      <MapMarker />
      <Button title="Confirm Location" onPress={handleConfirm} />
    </View>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    //position: 'absolute',
    //top: windowHeight/2,
    //left: windowWidth,
  },
});