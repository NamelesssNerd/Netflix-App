import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Topic = ({ title }) => {
    return (
        <View style={{ height: 40, width: "100%", display: "flex", justifyContent: "center", backgroundColor: "green", paddingLeft: 6 }}>
            <Text style={{ color: "white", fontSize: 23, fontWeight: "900" }}>{title}</Text>
        </View>
    )
}

export default Topic