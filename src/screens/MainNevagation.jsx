import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import Welcome from './Welcome';
import NevagationStrings from '../constant/NevagationStrings';
import Login from './Login';
import UserChoose from './UserChoose';
import Home from './Home';
import Games from './Games';
import News from './News';
import Laugh from './Laugh';
import Download from './Download';
const Stack = createStackNavigator();
const MainNevagation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={NevagationStrings.Welcome} component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name={NevagationStrings.Login} component={Login} options={{ headerShown: false }} />
                <Stack.Screen name={NevagationStrings.User} component={UserChoose} options={{ headerShown: false }} />
                <Stack.Screen name={NevagationStrings.Home} component={Home} options={{ headerShown: false }} />
                <Stack.Screen name={NevagationStrings.Games} component={Games} options={{ headerShown: false }} />
                <Stack.Screen name={NevagationStrings.News} component={News} options={{ headerShown: false }} />
                <Stack.Screen name={NevagationStrings.Laugh} component={Laugh} options={{ headerShown: false }} />
                <Stack.Screen name={NevagationStrings.Downloads} component={Download} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNevagation