import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ImageBackground,FlatList,Platform,PermissionsAndroid,Button, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Video from 'react-native-video';
import { shareAsync } from 'expo-sharing';
import WebView from 'react-native-webview';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign'
import { Input,Icon } from 'react-native-elements';
import AdminChangeEmail from '../../components/AdminChangeEmail';
import AdminChangePassword from '../../components/AdminChangePassword';

const data = [
    { label: 'Change Email', value: '1' },
    { label: 'Change Username', value: '2' },
    { label: 'Change Password', value: '3' },
    { label: 'Change Phone Number', value: '4' },
]
  

const EditUser = ({ route, navigation }) =>
{
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    console.log(route.params)
    const changeSettingType = (Type) => {
      if (Type  !=  null){
        if (Type == 1){
          return(
            <AdminChangeEmail
            Email = {route.params.Email}
            Password = {route.params.Password}
            UserEmail = {route.params.UserEmail}
            >
            </AdminChangeEmail>
          )
        }else if (Type == 3){
          return(
            <AdminChangePassword
            Email = {route.params.Email}
            Password = {route.params.Password}
            UserEmail = {route.params.UserEmail}
            >
            </AdminChangePassword>
          )
        }
      }
    };
    return (
        <View style = {{backgroundColor:"#A9A9A9",flex:1}}>
            <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                setValue(item.value);
                setIsFocus(false);
                }}
                renderLeftIcon={() => (
                <AntDesign
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name="Safety"
                    size={20}
                />
                )}
            />
            </View>
        <View>
            {changeSettingType(value)}
        </View>
            </View>
        ); 

    }

const styles = StyleSheet.create({

    container:{
        padding:16
    },
    TopText:{
        marginTop:10,
        marginLeft: 10,
        fontSize: 32,
        fontWeight:600,
        alignSelf: 'center',
        textAlign:'center',
    },
    checkText:{
        fontSize: 24,
        fontWeight: 500,
        textAlign: 'center',
    },
    checkContainer:{
        height:42,
        width: '75%',
        alignItems:'center',
        backgroundColor:'#e6fafa',
        alignSelf:'center',
        justifyContent: 'center',
        marginTop: 5,
        borderRadius:12
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
})

export default EditUser;
