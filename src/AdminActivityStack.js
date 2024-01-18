import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core'
import AdminHomeScreen from './screens/AdminHomeScreen';
import ChooseUser from './screens/ChooseUser';
import EditUser from './screens/EditUser';

const Stack = createNativeStackNavigator();

const AdminActivityStack = ({route}) => 
{
 // console.log(route.params)
  return (
    <Stack.Navigator>
      <Stack.Screen name="AdminScreen" options={{ headerShown: true, title: 'Admin Panel', headerTitleStyle: { color: '#FFFFFF'}, headerStyle:{backgroundColor: '#232b2b'}}} initialParams={route.params} component={AdminHomeScreen} />
      <Stack.Screen name="ChooseUser" options={{ headerShown: true, title: 'Choose User', headerTitleStyle: { color: '#FFFFFF'}, headerStyle:{backgroundColor: '#232b2b'}}} component={ChooseUser} />
      <Stack.Screen name="EditUser" options={{ headerShown: true, title: 'Edit User', headerTitleStyle: { color: '#FFFFFF'}, headerStyle:{backgroundColor: '#232b2b'}}} component={EditUser} />
    </Stack.Navigator>
  )

}

export default AdminActivityStack;

//      <Stack.Screen name="StudentHome" options={{ headerShown: true, title: 'Student WaterPAL', headerTitleStyle: { color: global.primary } }} component={StudentHomeScreen} />