import React from 'react';
import { View, StyleSheet, ScrollView, Text} from 'react-native';
import {WebView} from "react-native-webview"

const ThingsSpeak = () =>
{
    /*

    This is getting the hardcore values of the chart

    const Http = new XMLHttpRequest();
    const url ='https://api.thingspeak.com/channels/1984917/feeds.json'
    Http.open("GET",url);
    Http.send();

    var TS_Data = 'none'

    Http.onreadystatechange=(e)=>{

        if(Http.responseText != ''){
            //console.log(Http.responseText);
            TS_Data = JSON.parse(Http.responseText)

            console.log(TS_Data.feeds)

        }


    }
    */

    return(
        <ScrollView style = {styles.container}>
        <Text style = {styles.titleText}>Data</Text>
        <WebView
        androidHardwareAccelerationDisabled={true}
        automaticallyAdjustContentInsets={false}
        style={{opacity:.99,overflow: 'hidden', height:100 , width: '100%' }}

        source={{html: '<iframe width="500" height="300" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1984917/charts/2"></iframe>'}}
        />
        <Text style = {styles.titleText}>Data</Text>
        <WebView
        androidHardwareAccelerationDisabled={true}
        automaticallyAdjustContentInsets={false}
        style={{opacity:.99,overflow: 'hidden', height:100 , width: '100%' }}

        source={{html: '<iframe width="500" height="300" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1984917/charts/1"></iframe>'}}
        />
        <Text style = {styles.titleText}>Data</Text>
        </ScrollView>
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

export default ThingsSpeak;
