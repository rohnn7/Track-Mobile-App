import React, {useState, useContext, useEffect} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../Components/Spacer'
import SigninScreen from './SigninScreen'
import {NavigationEvents} from 'react-navigation'
import {Context as AuthContext} from '../Context/AuthContext'


const SignupScreen = ({navigation}) => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext)

     useEffect(()=>{tryLocalSignin()}, [])

    return (
        <View style={styles.container}>
            
            <Spacer>
                <Text h3>Signup for Tracker!!</Text>
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
                <Button title='Sign Up' onPress={()=>{signup(email, password)}} />
            </Spacer>

            <TouchableOpacity onPress={()=>{navigation.navigate('Signin')}}>
               <Spacer><Text style={styles.login} >Already have an account?</Text></Spacer> 
            </TouchableOpacity>
        </View>
    )
}

SignupScreen.navigationOption=()=>{
    return{
        header:null
    }
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

export default SignupScreen;