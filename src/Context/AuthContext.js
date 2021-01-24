import createDataContext from './createDataContext';
import axios from '../Axios/Axios'
import {AsyncStorage} from 'react-native'
import {Context as AuthContext} from '../Context/AuthContext'
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
        return{...state, errorMessage:action.payload}
    case 'signup':
        return {errorMessage:'', token:action.token}  
    case 'signout':
        return {token:null, errorMessage:''}
    case 'clear_error':
        return{...state, errorMessage:''}     
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch)=>{
    return ()=>{
        dispatch({type:'clear_error'})
    }
}

const tryLocalSignin = dispatch=>{
    return async ()=>{
        const token = await AsyncStorage.getItem('token')
        if(token){
            dispatch({type:'signup', token:token})
            navigate('mainFlow')
        }else{
            navigate('loginFlow')
        }
    }
}

const signup = (dispatch)=>{
    return async (email, password) => {
        try{
            const response = await axios.post('/signup', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type:'signup', token:response.data.token})
            console.log('Account Was Created')
            navigate('mainFlow')
         
        }catch(e){
            dispatch({type:'add_error', payload:'Something went wrong!'})
        }
    }
}

const signin = (dispatch)=>{
    return async (email, password) => {
        try{
            const response = await axios.post('/signin', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type:'signup', token:response.data.token})
            console.log('Signed In')
            navigate('mainFlow')
        }catch(e){
            dispatch({type:'add_error', payload:'Something went wrong!'})
        }
    }
}

const signout = (dispatch)=>{
    return async ()=>{
        AsyncStorage.removeItem('token')
        dispatch({type:'signout'})
        console.log('Signed out')
        navigate('loginFlow')
    }
}

export const {  Provider,Context } = createDataContext(
  authReducer,
  {signup, signin, signout, clearErrorMessage, tryLocalSignin},
  { token:null, errorMessage:'' }
);
