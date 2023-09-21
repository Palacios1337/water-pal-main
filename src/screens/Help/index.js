import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import * as React from 'react';
//import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';



const About = () =>
{
  const navigation = useNavigation()
  const handlePress = () =>
  {
    navigation.navigate("FAQ")
  }
  return (
    <SafeAreaView>
      <View style={styles.TitleContainer}>
        <Text style={styles.TextContainer}>About</Text>
      </View>
      <View>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          paddingLeft: 20,
        }}>
          Description of App:
        </Text>
        <Text style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 15,
          paddingBottom: 30,

        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          paddingLeft: 20,
        }}>
          Acknowledgements:
        </Text>
        <Text style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 15,
          paddingBottom: 30,
        }}>
          Some acknowledgements to this app are EPA, which is the United States
          Environmental Protection Agency. The other acknowledgement goes to Rowan University.


          {/* <View>
          <Image
        style={styles.epaLogo}
        source={require('../assets/acknologmentfolder/epa logo.png')}
        resizeMode='cover'
          />
          </View> */}


        </Text>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          paddingLeft: 20,
        }}>
          Frequently Asked Questions:
        </Text>
        <View style={{ paddingBottom: 30, }}></View>
      </View>
      <TouchableOpacity
        style={styles.ButtonContainer}
        onPress={handlePress}
      >
        <Text
          style={{
            alignContent: 'center',
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Go to FAQ
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  TitleContainer: {
    alignItems: 'center',
    //justifyContent: 'center',
    fontWeight: 'bold',
    top: 20,
    //backgroundColor: 'green',
    //width: '',
    height: 150,
  },
  TextContainer: {
    top: 40,
    fontSize: 45,
    //backgroundColor: '#32ba00', //this makes the background of the text green
    color: global.primary,
  },
  ButtonContainer: {
    width: 250,
    height: 55,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: global.primary,
    borderRadius: 15,
    //paddingTop: 10
  },
  epaLogo: {
    borderWidth: 5,
    height: 200,
    width: 200,
  }
});