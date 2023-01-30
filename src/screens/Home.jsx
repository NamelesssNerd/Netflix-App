import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Home/Header'
import HomeMain from './Home/HomeMain'
const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Header />
      <ScrollView>
        <HomeMain />
      </ScrollView>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({})