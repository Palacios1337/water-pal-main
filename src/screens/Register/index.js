import React ,{useState}from 'react'
import {  View, Text ,Image,StatusBar ,TouchableOpacity} from 'react-native';
import { wpxToDp,hpxToDp } from '../../utils/stylesKits';
import { Icon,Input ,Button,} from 'react-native-elements'
import axios from 'axios';
import Modal from 'react-native-modal';

export default function RegisterScreen({ navigation }) {
  const [useremail,setUseremail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [modalText,setModalText] = useState('invalid');




  const [isModalVisible,setIsModalVisible] = React.useState(false);
  const handleModal = (Result) => {

    console.log(isModalVisible)
    if (Result == "Unknown"){
      setModalText(Result)
    }else if(Result == "Email Already Exists"){
      setModalText(Result)
    }else if(Result == "No Email"){
      setModalText(Result)
    }else if(Result == "No PassWord"){
      setModalText(Result)
    }else if (Result == "Success"){
      setModalText("Account has been successfully created!")
    }
    else if (isModalVisible == true){
      setModalText("Account has been successfully created!!!!!")
      navigation.navigate('Login')
    }
    console.log(modalText)
    setIsModalVisible(() => !isModalVisible)
  
  };

  return (
   // <SafeAreaView
<View style={{
      alignItems: 'center',
      }}>

    <Input
      placeholder='Email'
      inputStyle={{color:"#333"}}
      onChangeText={text => setUseremail(text)}
      leftIcon={
        <Icon
          name='email'
          size={24}
          
      />
      }
    /> 
    <Input
      placeholder='Password'
      secureTextEntry={true}
      onChangeText={text => setPassword(text)}
      leftIcon={
        <Icon
          name='lock'
          size={24}
      />
      }
    />
<Input
      placeholder='Username'
      secureTextEntry={true}
      onChangeText={text => setName(text)}
      leftIcon={
        <Icon
          name='person'
          size={24}
      />
      }
    />
<Input
      placeholder='Phone Number (Optional)(Ex. 8561234567)'
      secureTextEntry={true}
      onChangeText={text => setPhone(text)}
      leftIcon={
        <Icon
          name='phone'
          size={24}
      />
      }
    />
    <Text style={{ marginTop:25, fontSize: 17, fontWeight: 'bold',color:'black' }}>
        
    </Text>

    <Modal isVisible={isModalVisible}>
      <View style={{ backgroundColor: 'white',borderRadius: 20,}}>
        <Text style = {{
            alignContent: 'center',
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {modalText}
        </Text>
        <Button
        buttonStyle={{width:"50%" ,borderRadius: 20,marginTop:20,marginBottom:5,alignSelf:'center'}}
         title="Ok" 
         onPress={handleModal}
         />
      </View>
    </Modal>


    <View>
      <Button
      buttonStyle={{width:"100%",borderRadius: 20,marginTop:20}}
      title="Create Account"
      onPress={() => {
        console.log(useremail)
        console.log(password)
        console.log(name)
        console.log(phone)

        axios.get("http://47.89.252.2:5000/singup.php?!="+useremail+"|"+password+'|'+name+'|'+phone).then(
          response => {
              
            if(response.data['success']===1)
            {
              console.log('success')
              handleModal("Success")
            }
            else {
              console.log(response.data)
              if(response.data['error'] == 1){
                console.log('Email Already Exists')
                handleModal("Email Already Exists")
              }
              if(response.data['error'] == 2){
                console.log('No Email')
                handleModal("No Email")
              }
              if(response.data['error'] == 3){
                console.log('Unknown')
                handleModal("Unknown")
              }
              if(response.data['error'] == 4){
                console.log('No PassWord')
                handleModal("No PassWord")
              }
              if(response.data['error'] == 5){
                console.log('Unknown')
                handleModal("Unknown")
              }

          
            }
          },
        )
       
    }}
      />
    </View>



    </View>
  )
}


//const RegisterScreen = () => {
//}

//export default RegisterScreen;