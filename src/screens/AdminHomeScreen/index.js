import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ImageBackground,FlatList,Platform,PermissionsAndroid,Button, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Video from 'react-native-video';
import YoutubePlayer from 'react-native-youtube-iframe';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { shareAsync } from 'expo-sharing';
import WebView from 'react-native-webview';




const AdminHomeScreen = ({ route, navigation }) =>
{
    var name = "Juan Palacios"

    console.log(route.params)
    const nextPageFunction = (decision) => {
        console.log(decision)
        if(decision == "Choose_User"){
            navigation.navigate('ChooseUser',route.params)
        }
    }

        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.welcomeContainer}>
                        <Text style = {styles.welcomeText}>
                           Welcome Admin {name}!
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.selectionContainer} onPress={ () => nextPageFunction("Choose_User")}>
                        <Text style = {styles.changePasswordText}>
                           Edits Users
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selectionContainer} onPress={ () => nextPageFunction("Edit_Information")} >
                        <Text style = {styles.changePasswordText}>
                           Edit Information
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        ); 

    }

const styles = StyleSheet.create({

    container:{
        flex: 1,
    },
    scrollContainer:{
        backgroundColor:'#A9A9A9'
    },
    welcomeContainer:{
        marginTop:10,
        marginLeft: 10
    },
    welcomeText:{
        fontSize: 24,
        fontWeight: 500
    },
    selectionContainer:{
        height:42,
        width: '75%',
        alignSelf:'center',
        alignContent:'center',
        backgroundColor:'#e6fafa',
        marginTop: 25,
        borderRadius:12
    },
    changePasswordText:{
        textAlign:'center',
        fontSize:30
    }
})

export default AdminHomeScreen;