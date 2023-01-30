import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeImage from './HomeImage'
import TV from './TV'

const HomeMain = () => {
    return (
        <View>
            <HomeImage />
            <TV mainTitle={"TV Action & Adventure"} />
        </View>
    )
}
export default HomeMain

const styles = StyleSheet.create({})