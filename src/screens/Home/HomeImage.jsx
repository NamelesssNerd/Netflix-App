import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeImage = () => {
    return (
        <View style={{ width: "100%", height: 480, position: "relative" }}>
            <View style={{ backgroundColor: "black", width: "100%", }}>
                <Image source={{ uri: "http://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg" }} style={{
                    width: "100%",
                    height: 480,
                    resizeMode: "cover"
                }} />
            </View>
            <View style={{
                height: 120, width: "100%", display: "flex",
                position: "absolute", backgroundColor: "rgba(0,0,0,0.6)", bottom: 0, zIndex: 99
            }}>
                <View style={{ height: 40, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                    <TouchableOpacity>
                        <Text style={styles.alltext}>Exiting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.alltext}>Fantasy Anime</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.alltext}>Ensemble</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.alltext}>Sword & Sandal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.alltext}>Seinen</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 80, display: "flex", flexDirection: "row" }}>
                    <View style={styles.commondiv}>
                        <TouchableOpacity style={styles.touch}>
                            <Image source={require("../../../assets/icons/plus.png")} style={styles.mylist} />
                            <Text style={styles.mylistText}>My List</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.commondiv}>
                        <TouchableOpacity style={styles.centerPlay}>
                            <Image source={require("../../../assets/icons/play.png")} style={styles.CenterPlayPlay} />
                            <Text style={styles.playText}>PLay</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.commondiv}>
                        <TouchableOpacity style={styles.touch}>
                            <Image source={require("../../../assets/icons/info.png")} style={styles.info} />
                            <Text style={styles.mylistText}>Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    alltext: {
        color: "white",
        fontWeight: "500"
    },
    commondiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: "33%",
    },
    centerPlay: {
        borderRadius: 4,
        width: "90%",
        backgroundColor: "white",
        height: 45,
        display: "flex",
        alignItems: 'center',
        flexDirection: "row",
    },
    CenterPlayPlay: {
        marginLeft: 14,
        width: 24,
        height: 24
    },
    playText: {
        marginLeft: 12,
        fontWeight: "600",
        fontSize: 18,
    },
    mylist: {
        marginLeft: 7,
        width: 23,
        height: 23
    },
    mylistText: {
        color: "white",
        fontWeight: "600"
    },
    info: {
        width: 23,
        height: 23
    },
    touch: {
        paddingTop:8,
        height: 56,
        display: "flex",
        alignItems: "center",
        borderRadius: 4,
        width: "50%",
        backgroundColor: "rgba(255,255,255,0.6)",
    }

})
export default HomeImage