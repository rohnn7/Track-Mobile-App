import React, {useEffect, useState, useContext, useCallback} from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import Map from '../Components/Map'
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'
import '../_mockLocation'
import {Context} from '../Context/LocationContext'
import useLocation from '../hook/useLocation'
import TrackForm from '../Components/TrackForm'



const TrackcreateScreen = ({isFocused}) => {
    const {state, addLocation} = useContext(Context)
    // const callback = useCallback((location)=>{
        
    //     addLocation(location, state.recording)
    // }, [state.recording])

    const [err] = useLocation(isFocused,useCallback((location)=>{
        
        addLocation(location, state.recording)
    }))
    

    return (
       <SafeAreaView forceInset={{top:'always'}}>
           <Text h2>Create a Track</Text>
           <Map/>
           {err?<Text>Please enable location sefvices</Text>:null}
           <TrackForm/>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackcreateScreen);