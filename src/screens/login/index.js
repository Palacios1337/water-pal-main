import * as React from 'react'
import { useState } from 'react';
import { SafeAreaView,StyleSheet,Text, View,Image,StatusBar ,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import { wpxToDp,hpxToDp } from '../../utils/stylesKits';
import { Icon,Input ,Button,} from 'react-native-elements'
import axios from 'axios';
import Modal from 'react-native-modal';
import {useSelector,useDispatch } from 'react-redux';
import {setEmail,setPassword} from '../../redux/actions';

const popuplist = [
  {
    id: 1,
    name: 'task'

  },
  {
    id: 2,
    name: 'Message'
    
  },
  {
    id: 3,
    name: 'Note'

  },
]

var responsedata = {};

export default function Login({navigation}) {


  const dispatch = useDispatch();

  const [useremail,setLoginEmail] = useState(useSelector((state)=>state.Email.Email));
  const [userpassword, setLoginPassword] = useState(useSelector((state)=> state.Password.Password));
  
  const [isModalVisible,setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const [isReduxModalVisible,setIsReduxModalVisible] = React.useState(false);
  const handleReduxModal = () => setIsReduxModalVisible(() => !isReduxModalVisible);


  const nextPageFunction = (decision) => {
    if(decision == 'yes'){
      dispatch(setEmail(useremail));
      dispatch(setPassword(userpassword));
      navigation.navigate('Home',{Role: responsedata.data['role'],Email: useremail,Password: userpassword});
      handleReduxModal();
      console.log('saved');
    } else if(decision == 'no'){
      dispatch(setEmail(''));
      dispatch(setPassword(''));
      navigation.navigate('Home',{Role: responsedata.data['role'],Email: useremail, Password: userpassword});
      console.log('notsaved');
      handleReduxModal();
    }
  }

  return (

    <SafeAreaView style={{
      alignItems: 'center',
      }}>
      
      <Image style={{
        top:25,
        height: hpxToDp(125),
        width: wpxToDp(150),
        
      }} 
        source={require("../../assets/WaterPal.png")}/>
      <Text style={{ marginTop:25, fontSize: 17, fontWeight: 'bold',color:'black'  }}>
        Where Learning Happens
      </Text>

    <Input
      placeholder='Input Email'
      inputStyle={{color:"#333"}}
      onChangeText={text => setLoginEmail(text)}
      value= {useremail}
      leftIcon={
        <Icon
          name='email'
          size={24}
          
      />


      }

    />

    <Input
      placeholder='Input Password'
      secureTextEntry={true}
      onChangeText={text => setLoginPassword(text)}
      value={userpassword}
      leftIcon={
        <Icon
          name='lock'
          size={24}
          
      />

      }

    />


    <View>
      <Button

      buttonStyle={{width:"100%",borderRadius: 20,marginTop:20}}
      title="Login"
      onPress={() => {
        //console.log(useremail)
       // console.log(password)
        //navigation.navigate('Home')
        axios.get("http://47.89.252.2:5000/login.php?!="+useremail+"|"+userpassword).then(
          response => {
              if(response.data['success']===1){
                console.log('success')
                //console.log(response)
                responsedata = response;
                //console.log(responsedata)
                handleReduxModal();
              }else {
                handleModal();
                console.log("error");
            }
          },
        )
       
    }}
      />




    <Modal isVisible={isModalVisible}>
      <View style={{ backgroundColor: 'white',borderRadius: 20,}}>
        <Text style = {{
            alignContent: 'center',
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Username or password is invalid
        </Text>
        <Button
        buttonStyle={{width:"50%" ,borderRadius: 20,marginTop:20,marginBottom:5,alignSelf:'center'}}
         title="Ok" 
         onPress={handleModal}
         />
      </View>
    </Modal>

    <Modal isVisible={isReduxModalVisible}>
      <View style={{ backgroundColor: 'white',borderRadius: 20,}}>
        <Text style = {{
            alignContent: 'center',
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Would you like to save your username and password?
        </Text>
        <Button
        buttonStyle={{width:"50%" ,borderRadius: 20,marginTop:20,marginBottom:5,alignSelf:'center'}}
         title="Yes" 
         onPress={() => nextPageFunction('yes')}
         />
                 <Button
        buttonStyle={{width:"50%" ,borderRadius: 20,marginTop:20,marginBottom:5,alignSelf:'center'}}
         title="No" 
         onPress={() => nextPageFunction('no')}
         />
      </View>
    </Modal>


      <Button
      buttonStyle={{width:"100%" ,borderRadius: 20,marginTop:20}}
      title="Creat Account"
      onPress={() => {navigation.navigate('Register')}}
      />
      <TouchableOpacity
        onPress={() => {navigation.navigate('Tutorial')}}
      >
        <Text
          style={{
            alignContent: 'center',
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          WaterPAL Tutorial
        </Text>
      </TouchableOpacity>
    </View>
    
    </SafeAreaView>
  )

  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});