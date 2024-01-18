import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core'
import Standards from './screens/Standards';
import StandardsInfo from './screens/StandardsInfo';

const Stack = createNativeStackNavigator();

const StandardsStack = (navigation,route) => 
{
  console.log(navigation)
  return (
    <Stack.Navigator>
      <Stack.Screen name="Standardz" options={{ headerShown: false}} component={Standards} />
      <Stack.Screen name="StandardsInfo" options={{ headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: 'Standards Info', headerTitleStyle: { color: '#2089dc' } }} component={StandardsInfo} />
    </Stack.Navigator>
  )

}

export default StandardsStack;

//      <Stack.Screen name="StudentHome" options={{ headerShown: true, title: 'Student WaterPAL', headerTitleStyle: { color: global.primary } }} component={StudentHomeScreen} />
// <Stack.Scren name="ResetPassword" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'red' } }} component={ResetPassword} />
//<Stack.Screen name="AccountAndPrivacy" option={{ headerShown: true, title: 'Account and Privacy', headerTitleStyle:{color: global.primary}}} component={Account}/>