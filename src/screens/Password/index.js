import React, { useState } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { wpxToDp, hpxToDp } from '../../utils/stylesKits';
import { Icon, Input, Button } from 'react-native-elements';
import axios from 'axios';
//import { useNavigation } from '@react-navigation/native';

const Password = ({route,navigation}) => {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [newpassword2, setNewPassword2] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); // Track if passwords match
  //const navigation = useNavigation();
  const resetPassword = () => {
    if (newpassword !== newpassword2) {
      setPasswordsMatch(false);
      return; // Don't proceed if passwords don't match
    }

    // Reset the error state if passwords match
    setPasswordsMatch(true);

    console.log(useremail);
    console.log(password);
    axios
      .get("http://47.89.252.2:5000/resetpassword.php?!" + useremail + "|" + password + "|" + newpassword)
      .then(
        (response) => {
          if (response.data['success'] === 1) {
            console.log('Success');
            navigation.navigate('Login');
          } else {
            console.log(response.data['error']);
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
        placeholder="Input Email"
        inputStyle={{ color: "#333" }}
        onChangeText={(text) => setUseremail(text)}
        leftIcon={<Icon name="email" size={24} />}
      />

      <Input
        placeholder="Input Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        leftIcon={<Icon name="lock" size={24} />}
      />

      <Input
        placeholder="Input New Password"
        secureTextEntry={true}
        onChangeText={(text) => setNewPassword(text)}
        leftIcon={<Icon name="lock" size={24} />}
      />
      <Input
        placeholder="Input New Password Again"
        secureTextEntry={true}
        onChangeText={(text) => setNewPassword2(text)}
        leftIcon={<Icon name="lock" size={24} />}
        inputStyle={passwordsMatch ? {} : { borderColor: 'red' }} // Set border color if passwords don't match
      />

      {!passwordsMatch && (
        <Text style={{ color: 'red', marginTop: 10 }}>Passwords must match.</Text>
      )}

      <View>
        <Button
          buttonStyle={{ borderRadius: 20, marginTop: 10 }}
          title="Reset Password"
          onPress={resetPassword}
        />
      </View>
    </View>
  );
};

export default Password;


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