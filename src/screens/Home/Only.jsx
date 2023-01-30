import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Topic from './Topic'
const TV = ({ mainTitle, tdata }) => {
    const PageData = JSON.parse(tdata);
    return (
        <View>
            <Topic title={mainTitle} />
            <FlatList
                horizontal
                data={PageData}
                renderItem={(val) => {
                    return (
                        <TouchableOpacity key={val.item._id.$oid} style={styles.touchables}>
                            <View style={styles.box}>
                                <Image source={{ uri: val.item["Poster"] }} style={styles.imm} />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    imm: {
        width: "100%",
        height: 350,
    },
    box: {
        overflow: "hidden",
        marginTop: 3,
        marginLeft: 5,
        borderRadius: 5,
        height: 350,
        width: 170,
    },
    touchables: {
        marginTop: 3,
        borderRadius: 5,
        marginLeft: 10,
        width: 170,
    }
})
export default TV
