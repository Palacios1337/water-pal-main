import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core'
import Settings from './screens/Settings';
import Password from './screens/Password';
import UserProfile from './screens/UserProfile';
import Help from './screens/Help';
import About from './screens/About';

const Stack = createNativeStackNavigator();

const SettingsStack = (navigation,route) => 
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" options={{ headerShown: true, title: 'Settings', headerTitleStyle: { color: global.primary } }} component={Settings} />
      <Stack.Screen name="Password" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: 'Password', headerTitleStyle: { color: '#2089dc' } }} component={Password} />
      <Stack.Screen name="UserProfile" option={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: 'User Profile', headerTitleStyle:{color: global.primary}}} component={UserProfile}/>
      <Stack.Screen name="Help" option={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: 'Help', headerTitleStyle:{color: global.primary}}} component={Help}/>
      <Stack.Screen name="About" option={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: 'About', headerTitleStyle:{color: global.primary}}} component={About}/>
    </Stack.Navigator>
  )

}

export default SettingsStack;

//      <Stack.Screen name="StudentHome" options={{ headerShown: true, title: 'Student WaterPAL', headerTitleStyle: { color: global.primary } }} component={StudentHomeScreen} />
// <Stack.Scren name="ResetPassword" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'red' } }} component={ResetPassword} />
//<Stack.Screen name="AccountAndPrivacy" option={{ headerShown: true, title: 'Account and Privacy', headerTitleStyle:{color: global.primary}}} component={Account}/>