import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/login"
import Tutoria from "./screens/Tutorial"
import Register from "./screens/Register"
import Navbar from "./navbar"


function HomeScreen({ navigation,route }) {

  //const {Role} = route.params;
  //console.log(Role);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Tutorial')}
      />
    </View>
  );
}


const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Home" options={{ headerShown: false  }} component={Navbar} />
        <Stack.Screen name="Tutorial" options={{ headerShown: true, title: 'WaterPAL Tutorial'  }} component={Tutoria} />
        <Stack.Screen name="Register" options={{ headerShown: true, title: 'Create Account' }} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;