import React, {useContext} from 'react'
import {StyleSheet, ActivityIndicator} from 'react-native'
import {Text } from 'react-native-elements'
import MapView, {Polyline, Circle} from 'react-native-maps'
import Spacer from '../Components/Spacer'
import {Context} from '../Context/LocationContext'

const Map = () =>{
    const {state}= useContext(Context)

    if(!state.currentLocation){
        return <ActivityIndicator size='large' style={{marginTop:200}} />
    }
    
 
    return (
        <Spacer>
            <MapView
            style={styles.map}
            initialRegion={{
                ...state.currentLocation.coords,
                latitudeDelta:0.01,
                longitudeDelta:0.01
            }}
            region={{
                ...state.currentLocation.coords,
                latitudeDelta:0.01,
                longitudeDelta:0.01
            }}
            >
             <Circle
                center={state.currentLocation.coords}
                radius={20}
                strokeColor='rgba(158,158, 255, 1.0)'
                fillColor='rgba(158,158, 255, 0.3)'
             />   
            </MapView>
        </Spacer>
    )
}

const styles = StyleSheet.create({
    map:{
        height:300
    }
})

export default Map