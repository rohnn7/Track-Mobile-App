import React, {useContext} from 'react'
import {View,  StyleSheet} from 'react-native'
import {Button, Text} from 'react-native-elements'
import {Context} from '../Context/AuthContext'
import Spacer from '../Components/Spacer'

const AccountScreen = () => {
    const {state, signout}= useContext(Context)
    return (
       <View>
           <Spacer>
               <Spacer/>
           <Text h3>Account Screen</Text>
           <Spacer/>
           <Button title='Sign Out' onPress={signout} />
           </Spacer>
           
       </View>
    )
}

const styles = StyleSheet.create({

})

export default AccountScreen;