
import {useEffect, useState} from 'react'
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'

export default (shouldTrack,callback) =>{
    const [err, setErr]=useState(null)
  

   

    
    useEffect(()=>{
        let Subscriber=null;
        const startWatching = async ()=>{
            try{
                Subscriber=await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, callback)
                
            }catch(e){
                setErr(e)
            }
        }
        
            startWatching()
        
       

        // return () => {
        //     if(Subscriber){
        //         Subscriber.remove()
        //     }
        // }
    },[shouldTrack, callback])

    return [err]
}