import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';
import WebView from 'react-native-webview';

//import Pdf from 'react-native-pdf';

const Tutorial = ({ route, navigation }) =>
{
    const handlePress = () =>
    {
        navigation.replace("Login")
    }

    return(

            //<WebView source={{ uri: 'http://47.89.252.2:5000/DIY_Water_Filter.html' }} />
    <WebView source = {{uri:'https://dochub.com/palaci25/oGZeMNnwXOGlaYeVQvbrYd/sysconlab7-pdf?dt=f2KkbUGuxhScw5q_cbQw'}}/>
    )
}

export default Tutorial;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15,
    },
});