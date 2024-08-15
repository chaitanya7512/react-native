import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen'
import Login from '../components/Login'
import Register from '../components/Register'
import TaskItem from '../screens/TaskItem'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
<Stack.Screen name='Login' component={Login} />   
<Stack.Screen name='Register' component={Register}/>  
<Stack.Screen name='TaskItem' component={TaskItem}/>
    </Stack.Navigator> </NavigationContainer>
  )
}

export default AppNavigator

