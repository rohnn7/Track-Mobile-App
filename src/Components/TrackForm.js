import React, {useContext} from 'react'
import {Input, Button} from 'react-native-elements'
import Spacer from './Spacer'
import {Context} from '../Context/LocationContext'

const TrackForm = () => {

    const {state,startRecording, stopRecording, changeName } = useContext(Context)
    console.log(state.locations)

    return(
        <Spacer>
            <Input value={state.name} onChangeText={changeName} placeholder='Enter Name'/>
            {state.recording
            ? <Button title='Stop Recording' onPress={stopRecording} />
            : <Button title='Start Recording' onPress={startRecording} />}
            
        </Spacer>
    )
}

export default TrackForm;