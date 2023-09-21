import React ,{useState}from 'react'
import {  View, Text ,Image,StatusBar ,TouchableOpacity} from 'react-native';
import { wpxToDp,hpxToDp } from '../../utils/stylesKits';
import { Icon,Input ,Button,} from 'react-native-elements'
import axios from 'axios';

export default function RegisterScreen({ navigation }) {
  const [useremail,setUseremail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

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
            }
            else {
              console.log(response.data)
              if(response.data['error'] == 1){
                console.log('Email Already Exists')
              }
              if(response.data['error'] == 2){
                console.log('No Email')
              }
              if(response.data['error'] == 3){
                console.log('Unknown')
              }
              if(response.data['error'] == 4){
                console.log('No PassWord')
              }
              if(response.data['error'] == 5){
                console.log('Unknown')
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