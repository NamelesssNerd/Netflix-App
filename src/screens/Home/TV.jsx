import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Topic from './Topic'
import Data from "../../../Data/moviedatas.json"
const TV = ({ mainTitle }) => {
    const Box = () => {
        return (
            <TouchableOpacity>
                <View style={styles.box}>
                    <Image source={{ uri: "http://image.tmdb.org/t/p/w500/od22ftNnyag0TTxcnJhlsu3aLoU.jpg" }} style={styles.imm} />
                </View>
            </TouchableOpacity>

        )
    }
    return (
        <View>
            {/* <Topic title={mainTitle} />
            <FlatList data={Data}
                renderItem={Box}
            /> */}
            <Box />
        </View>
    )
}
const styles = StyleSheet.create({
    imm: {
        width: "100%",
        height: 140,
    },
    box: {
        overflow: "hidden",
        marginTop: 3,
        marginLeft: 5,
        borderRadius: 5,
        height: 140,
        width: 110,
    }
})
export default TV
