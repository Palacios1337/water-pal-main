import React, { useState } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const AdminChangeEmail = (props) => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [isValid,setValid] = useState('invalid')
  const [isModalVisible,setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  console.log(isValid)


  const validityFunction = () =>{
    if(isValid == "valid"){
      navigation.navigate('ChooseUser',{Email: props.Email,Password:props.Password})
      handleModal()
    }else{
      handleModal()
    }

  }

  const renderValidity = () => {
    if(isValid == 'valid'){
      return(
        <Text style = {{
          alignContent: 'center',
          alignSelf: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Success! Return to Choose User!
        </Text>
      )
    } else if(isValid == 'invalid'){
      return(
        <Text style = {{
          alignContent: 'center',
          alignSelf: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Invalid Email or Email Taken!
        </Text>
      )
    }
  }

  const changeEmail = () => {
    axios
      .get("http://47.89.252.2:5000/WaterBackend/adminChangeEmail.php?!="+props.Email+"|"+props.UserEmail+"|"+props.Password+"|"+Email)
      .then(
        (response) => {
          console.log(response.data)
          if (response.data['success'] === 1) {
            console.log('success')
            setValid('valid')
            handleModal()
          } else {
            console.log(response.data['error']);
            setValid('invalid')
            handleModal()
          }
        },
        (error) => {
          console.log('Error');
        }
      );
  };
  
  return (
    <View style={{ alignItems: 'center' }}>
      <Input
        placeholder="Insert New Email"
        inputStyle={{ color: "#333" }}
        onChangeText={(text) => setEmail(text)}
        leftIcon={<Icon name="email" size={24} />}
      />
      <View>
        <Button
          buttonStyle={{ borderRadius: 15, width: 150, backgroundColor:'#33acde' }}
          title="Change Email"
          onPress={changeEmail}
        />
      </View>
        <Modal isVisible={isModalVisible}>
          <View style={{ backgroundColor: 'white',borderRadius: 20,}}>
            {renderValidity()}
            <Button
            buttonStyle={{width:"50%" ,borderRadius: 20,marginTop:20,marginBottom:5,alignSelf:'center'}}
            title="Ok" 
            onPress={validityFunction}
            />
          </View>
      </Modal>
    </View>
  );
};

export default AdminChangeEmail;


const styles = StyleSheet.create({
  header: {
      alignSelf: 'center',
      paddingBottom: 20,
      paddingTop: 20,
      fontWeight: 'bold',
      fontSize: 20
  },
  button: {
      width: '80%',
      height: 60,
      backgroundColor: global.primary,
      alignSelf: 'center',
      borderRadius: 15,
      justifyContent: 'center'
  },
  gradeTitle: {
      alignSelf: 'center',
      fontSize: 17,
      fontWeight: 'bold',
      color: 'black'

  }
})