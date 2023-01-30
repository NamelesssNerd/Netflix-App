import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const Header = () => {

    return (
        <View style={styles.mainHeader}>
            <View style={styles.upperHeader}>
                <Image source={require("../../../assets/icons/netflix.png")} style={styles.logo} />
                <TouchableOpacity style={styles.topsearch}>
                    <Image source={require("../../../assets/icons/search.png")} style={styles.search} />
                </TouchableOpacity>
            </View>
            <View style={styles.downHeader}>
                <TouchableOpacity>
                    <Text style={styles.headerText}>TV SHows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.headerText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Text style={styles.headerText}>Categories</Text>
                    <Image source={require("../../../assets/icons/down.png")} style={styles.down} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainHeader: {
        width: "100%",
        height: 120,
        overflow: 'hidden',
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,.7)"
    },
    upperHeader: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        height: 90
    },
    logo: {
        width: 45,
        height: 45,
        marginTop: 40,
    },
    topsearch: {
        width: 45,
        height: 45,
        marginTop: 40,
    },
    search: {
        width: 45,
        height: 45,
        marginLeft: -20,
        backgroundColor: "#FFF",
        borderRadius: 5
    },
    downHeader: {
        width: "100%",
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    category: {
        display: "flex",
        flexDirection: "row"
    },
    down: {
        alignSelf: "center",
        marginLeft: 5,
        width: 18,
        height: 18,
        backgroundColor: "white",
        borderRadius: 3
    },
    headerText: {
        fontSize: 20,
        color: "white",
        fontWeight: "600"
    }
})
export default Header