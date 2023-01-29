import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import NevagationStrings from '../constant/NevagationStrings'
const UserChoose = ({ navigation }) => {
    const callme = () => {
        navigation.navigate(NevagationStrings.Home)
    }
    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}>
            <Image source={require("../../assets/images/secondLogo.jpg")} style={{
                height: 70, width: "100%", marginTop: 54,
            }} />
            <View style={{
                marginTop: "30%",
                width: "85%",
                height: 550,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
            }}>
                <Text style={{ fontSize: 26, fontWeight: "500", color: "white" }}>Who's Watching?</Text>
                <View style={{
                    marginTop: 23,
                    width: "100%", height: 230,
                    height: 450,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    paddingTop: 6,
                }}>
                    <TouchableOpacity style={{ backgroundColor: "black", width: "45%", height: 160, overflow: "hidden" }} onPress={callme}>
                        <View>
                            <Image source={require("../../assets/images/3.jpg")} style={{ width: "100%", height: 130, borderRadius: 4 }} />
                            <Text style={{ color: "white", alignSelf: "center", paddingTop: 4, fontWeight: "500" }}>Sushant</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "black", width: "45%", height: 160, overflow: "hidden", marginLeft: 10 }} onPress={callme}>
                        <View >
                            <Image source={require("../../assets/images/2.jpg")} style={{ width: "100%", height: 130, borderRadius: 4 }} />
                            <Text style={{ color: "white", alignSelf: "center", paddingTop: 4, fontWeight: "500" }}>Avanish</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "black", width: "45%", height: 160, overflow: "hidden", marginTop: 45 }} onPress={callme}>
                        <View >
                            <Image source={require("../../assets/images/1.jpg")} style={{ width: "100%", height: 130, borderRadius: 4 }} />
                            <Text style={{ color: "white", alignSelf: "center", paddingTop: 4, fontWeight: "500" }}>Adolf</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "black", width: "45%", height: 160, overflow: "hidden", marginLeft: 10 }} onPress={callme}>
                        <View >
                            <Image source={require("../../assets/images/4.jpg")} style={{ width: "100%", height: 130, borderRadius: 4 }} />
                            <Text style={{ color: "white", alignSelf: "center", paddingTop: 4, fontWeight: "500" }}>Peaky</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default UserChoose