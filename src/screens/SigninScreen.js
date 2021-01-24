import React, {useContext, useState} from 'react'
import {View,  StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../Components/Spacer'
import {Context as AuthContext} from '../Context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = ({navigation}) => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const {state, signin, clearErrorMessage} = useContext(AuthContext)

     

    return (
        <View style={styles.container}>
          
            <Spacer>
                <Text h3>SignIn for Tracker!!</Text>
            </Spacer>
            <Input label='Email' 
                   value={email}
                   onChangeText={setEmail}
                   autoCapitalize={false}
                   autoCorrect={false}  />
            <Spacer/>
            <Input label='Password' 
                   value={password}
                   onChangeText={setPassword}
                   autoCapitalize={false}
                   autoCorrect={false} 
                   secureTextEntry={true} />
            <Spacer>
                <Text style={styles.text} >{state.errorMessage}</Text>
            </Spacer>
            <Spacer>
                <Button title='Sign In' onPress={()=>{signin(email, password)}} />
            </Spacer>

            <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
               <Spacer><Text style={styles.login} >Don't have account?</Text></Spacer> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:200
    },
    text:{
        color:'red'
    },
    login:{
        color:'blue'
    }
})

export default SigninScreen;