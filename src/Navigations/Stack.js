import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Screens/Auth/Login'
import Register from '../Screens/Auth/Register'
import Splash from '../Screens/Auth/Splash'
import Home from '../Screens/Home'
import Bottom_tab from './Bottom_tab'
import Adoption_req from '../Screens/Adoption_req'
import Display from '../Screens/Display'

const stack = createNativeStackNavigator()

const Stack = () => {
    return (
        <NavigationContainer>
            <stack.Navigator
            screenOptions={{
                headerShown: false,
                initialRouteName: 'Splash'
            }}
            >
                <stack.Screen name="splash" component={Splash} />
                <stack.Screen name="register" component={Register} />
                <stack.Screen name="login" component={Login} />

                <stack.Screen name="tab" component={Bottom_tab} />
                <stack.Screen name="request" component={Adoption_req} />
                <stack.Screen name="display" component={Display} />
            </stack.Navigator>
        </NavigationContainer>

    )
}



export default Stack
