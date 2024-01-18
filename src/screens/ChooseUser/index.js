import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ImageBackground,FlatList,Platform,PermissionsAndroid,Button } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Video from 'react-native-video';
import { shareAsync } from 'expo-sharing';
import WebView from 'react-native-webview';
import { Input,Icon } from 'react-native-elements';
import Modal from 'react-native-modal';


const ChooseUser = ({ route, navigation }) =>
{

    console.log(route.params)
    const [Email,setEmail] = useState('')

    const [isModalVisible,setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const nextPageFunction = () => {
        console.log(Email)
        axios.get("http://47.89.252.2:5000/WaterBackend/checkIfUserExist.php?!="+Email+"|").then(
          response => {
              if(response.data['success']===1){
                console.log('success')
                navigation.navigate('EditUser',{Email: route.params.Email, Password: route.params.Password, UserEmail:Email});
              }else {
                handleModal();
                console.log("error");
            }
          },
        )
    }



        return (
            <View style={styles.container}>
                    <Text style = {styles.TopText}>
                        Choose User
                    </Text>
                    <Input
                        placeholder="Input Email"
                        inputStyle={{ color: "#000000" }}
                        onChangeText={text => setEmail(text)}
                        leftIcon={<Icon name="email" size={24} />}
                    />
                    <TouchableOpacity style ={styles.checkContainer} onPress={() => {nextPageFunction()}}>
                        <Text style={styles.checkText}>
                            Edit User
                        </Text>
                    </TouchableOpacity>
                    
                    <Modal isVisible={isModalVisible}>
                        <View style={{ backgroundColor: 'white',borderRadius: 20,height:100, width: "100%",alignSelf:'center',alignItems:'center',alignContent:'center'}}>
                            <Text style = {{
                                alignContent: 'center',
                                alignSelf: 'center',
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'black',
                                height: 40,
                                width: '100%',
                                textAlign:'center',
                                marginTop:10,
                            }}>
                            Invalid Email Try Again!
                            </Text>
                            <TouchableOpacity
                            style ={{
                                backgroundColor:"#2196f3",
                                width: '80%',
                                borderRadius: 12,
                                height:32,
                                justifyContent:'center'
                            }}
                            onPress={() => handleModal()}
                            >
                                <Text
                                style ={{
                                    fontSize:20,
                                    textAlign:"center",
                                    fontWeight: '500'
                                }}
                                >
                                    Ok
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
            </View>
        ); 

    }

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:'#A9A9A9'
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
    }
})

export default ChooseUser;