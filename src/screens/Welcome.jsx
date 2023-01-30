import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import NevagationStrings from '../constant/NevagationStrings'
const Welcome = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(NevagationStrings.Home)
        }, 0);
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Image source={require("../../assets/images/welcomeImage.jpg")} style={{ width: "100%", height: "100%" }} />
        </View>
    )
}

export default Welcome