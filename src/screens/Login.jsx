import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NevagationStrings from '../constant/NevagationStrings'
const Login = ({ navigation }) => {

    const returnHome = () => {
        navigation.navigate(NevagationStrings.User)
    }
    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}>
            <Image source={require("../../assets/images/secondLogo.jpg")} style={{
                height: 70, width: "100%", marginTop: 54,
            }} />
            <View style={{
                marginTop: "40%",
                height: 430, width: "90%",
                display: "flex",
                alignItems: "center",
                paddingTop: 70,
            }}>
                <TextInput placeholder='Email Address' placeholderTextColor={"#828282"} style={{
                    backgroundColor: "#333333",
                    height: 64,
                    width: 350,
                    placeholderTextColor: 'pink',
                    borderRadius: 5,
                    paddingLeft: 8,
                    color: "white"
                }} />
                <TextInput placeholder='Password' placeholderTextColor={"#828282"} secureTextEntry={true} style={{
                    backgroundColor: "#333333",
                    height: 64,
                    width: 350,
                    placeholderTextColor: 'pink',
                    borderRadius: 5,
                    paddingLeft: 8,
                    marginTop: 15,
                    color: "white"
                }} />
                <TouchableOpacity style={{
                    height: 64,
                    marginTop: 20,
                    width: 350,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#828282",
                    borderRadius: 4,
                }} onPress={returnHome}>
                    <Text style={{ fontSize: 17, color: "#828282" }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}
export default Login