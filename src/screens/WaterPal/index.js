import React from 'react';
import { View, StyleSheet, ScrollView, Text,} from 'react-native';
import {WebView} from "react-native-webview"

const WaterPal = () =>
{
//test
    return(
        <WebView source = {{uri:'http://game.agaii.org/'}}/>
    )
}

const styles = StyleSheet.create({
    ScrollViewContainer: {
        // backgroundColor: 'red',
        width: '100%',
        //top: 0,
        // bottom: 150,
        height: '90%',

    },
    ListSectionContainer: {
        //backgroundColor: '#283654',
    },
    container:{
        flex: 1,
        height:100
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 23,
        paddingLeft: 10,
        // color: '#00bd48',
        color: global.primary,
        paddingTop: 10,
    }
});

export default WaterPal;