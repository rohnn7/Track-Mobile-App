import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createSwitchNavigator } from '@react-navigation/compat'
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackdetailScreen from './src/screens/TrackdetailScreen'
import TrackcreateScreen from './src/screens/TrackcreateScreen'
import TracklistScreen from './src/screens/TracklistScreen'
import {Provider, Context } from './src/Context/AuthContext'
import {AsyncStorage} from 'react-native'
import {setNavigator} from './src/navigationRef'
import {Provider as LocationProvider} from './src/Context/LocationContext'



// const switchNavigator = createSwitchNavigator({
//   loginFlow: createStackNavigator({
//     Signup: SignupScreen,
//     Signin: SigninScreen
//   }),
//   mainFlow: createBottomTabNavigator({
//     trackListFlow: createStackNavigator({
//         TrackList: TracklistScreen,
//         TrackDetail: TrackdetailScreen
//     }),
//     Account: AccountScreen,
//     TrackCreate: TrackcreateScreen
//   })
// })

// export default createAppContainer(switchNavigator);

let token = 0 ;

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()


const trackListFlow = ()=>(
  <Stack.Navigator>
    <Stack.Screen name='TrackList' component={TracklistScreen} />
    <Stack.Screen name='TrackDetail' component={TrackdetailScreen} />
  </Stack.Navigator>
)

const MainFlow = ()=>{
  console.log(token)
  return(
  <BottomTab.Navigator>
    <BottomTab.Screen name='trackListFLow' component={trackListFlow} />
    <BottomTab.Screen name='Account' component={AccountScreen} />
    <BottomTab.Screen name='trackCreate' component={TrackcreateScreen} />
  </BottomTab.Navigator>
)}

const LoginFlow=()=>{
  console.log(token)
  return(
  <Stack.Navigator>
    <Stack.Screen name='Signup' component={SignupScreen} />
    <Stack.Screen name='Signin' component={SigninScreen} />
  </Stack.Navigator>
)}

const ContainerFlow = createSwitchNavigator({
  loginFlow: LoginFlow,
  mainFlow: MainFlow
})

const Navigator=()=>{
  return(
    <LocationProvider>
      <Provider>
        <NavigationContainer ref={(navigator)=>{setNavigator(navigator)}} >
          <ContainerFlow/>
        </NavigationContainer>
      </Provider>
    </LocationProvider>
  
  
)}

export default Navigator;