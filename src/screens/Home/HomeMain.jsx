import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeImage from './HomeImage'
import TV from './TV'
import { RangeData } from "userval-checker"
import Data from "../../../Data/moviedatas.json"
import Only from "./Only"
import FooterPadMistake from './FooterPadMistake'
const HomeMain = () => {
    const random = Math.floor(Math.random() * (Data.length - 1));
    const [mainImage, setmainimage] = useState(Data[random].Poster);
    const [action, setaction] = useState((JSON.stringify(RangeData(Data, 0, 300))));
    const [trending, settrending] = useState((JSON.stringify(RangeData(Data, 301, 600))));
    const [newrelease, setnewrelease] = useState((JSON.stringify(RangeData(Data, 601, 900))));
    const [onlyNetflix, setonlynetflix] = useState((JSON.stringify(RangeData(Data, 901, 1200))));
    const [dramas, setdramas] = useState((JSON.stringify(RangeData(Data, 1201, 1500))));
    const [ActionMovies, setacttionmovies] = useState((JSON.stringify(RangeData(Data, 1501, 1800))));
    const [popular, setpopular] = useState((JSON.stringify(RangeData(Data, 1801, 2100))));
    const [watchitagain, setwatchitagain] = useState((JSON.stringify(RangeData(Data, 2101, 2400))));
    const [workplace, setworkplace] = useState((JSON.stringify(RangeData(Data, 2401, 2700))));
    const [secret, setsecret] = useState((JSON.stringify(RangeData(Data, 2701, 3000))));
    const [bonge, setbonge] = useState((JSON.stringify(RangeData(Data, 3001, 3300))));
    const [historical, sethistorical] = useState((JSON.stringify(RangeData(Data, 3301, 3600))));
    const [Exciting, setexiting] = useState((JSON.stringify(RangeData(Data, 3601, 3900))));
    const [award, setaward] = useState((JSON.stringify(RangeData(Data, 3901, 4200))));
    const [Teen, seteteen] = useState((JSON.stringify(RangeData(Data, 4201, 4500))));
    const [womanBehind, setwomanBehind] = useState((JSON.stringify(RangeData(Data, 4501, 4800))));
    const [Cinematography, setcinematography] = useState((JSON.stringify(RangeData(Data, 4801, 5100))));
    const [topsearch, settopas] = useState((JSON.stringify(RangeData(Data, 4801, 5100))));
    useState(() => {
        setmainimage(Data[random].Poster)
    }, [random])
    return (
        <View>
            <HomeImage imagelink={mainImage} />
            <TV mainTitle={"TV Action & Adventure"} tdata={action} />
            <TV mainTitle={"Trending Now"} tdata={trending} />
            <TV mainTitle={"New Releases"} tdata={newrelease} />
            <Only mainTitle={"Only On Netflix"} tdata={onlyNetflix} />
            <TV mainTitle={"Witchcraft Tv Dramas"} tdata={dramas} />
            <TV mainTitle={"Action Movies"} tdata={ActionMovies} />
            <TV mainTitle={"Popular On Netflix"} tdata={popular} />
            <TV mainTitle={"Watch It Again"} tdata={watchitagain} />
            <TV mainTitle={"Workplace TV Dramas"} tdata={workplace} />
            <Only mainTitle={"Can You Keep a Secret?"} tdata={secret} />
            <TV mainTitle={"BongeWorthy Tv Shows"} tdata={bonge} />
            <TV mainTitle={"Historical TV Shows"} tdata={historical} />
            <TV mainTitle={"Exiting US TV Thrillers & Mysteries"} tdata={Exciting} />
            <TV mainTitle={"Award Wining Films"} tdata={award} />
            <TV mainTitle={"Teen TV SHows"} tdata={Teen} />
            <TV mainTitle={"Woman Behind The Camera"} tdata={womanBehind} />
            <Only mainTitle={"Cinematography 101"} tdata={Cinematography} />
            <TV mainTitle={"Top Searches"} tdata={topsearch} />
            <FooterPadMistake />
            <FooterPadMistake />
        </View>
    )
}

const styles = StyleSheet.create({})
export default HomeMain