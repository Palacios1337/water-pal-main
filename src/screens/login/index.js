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

export default function Login({ navigation }) {

  const dispatch = useDispatch();
  const {Email,Password} = useSelector((state)=>state.userReducer);

  const [useremail,setLoginEmail] = useState('');
  const [userpassword, setLoginPassword] = useState('');
  
  const [isModalVisible,setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

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

                dispatch(setEmail(useremail));
                dispatch(setPassword(userpassword));
                console.log(Email)
                console.log(Password);

                console.log('success')
                navigation.navigate('Home',{Role: response.data['role']})
              }else {
                console.log(Email)
                console.log(Password);
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