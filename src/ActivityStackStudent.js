import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core'
import StudentHomeScreen from './screens/StudentHomeScreen';
import StudentActivitydetailsscreen from './screens/StudentActivityDetailsScreen';
import PdfViewer from './screens/PdfViewer';
import StudentGradeSelection from './screens/StudentGradeSelection';
import FAQ from "./screens/FAQ"
import ThingsSpeak from './screens/ThingsSpeak';
import WaterTalk from './screens/WaterTalk';
import WaterPal  from './screens/WaterPal';

const Stack = createNativeStackNavigator();

const ActivityStack = () => 
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="StudentHome" options={{ headerShown: true, title: 'Student WaterPAL', headerTitleStyle: { color: global.primary }, headerStyle:{backgroundColor:'#97f0d4'} }} component={StudentHomeScreen} />
      <Stack.Screen name="GradeSelection" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'red' } }} component={StudentGradeSelection} />
      <Stack.Screen name="ActivityDetails" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: 'Activity Details', headerTitleStyle: { color: global.primary } }} component={StudentActivitydetailsscreen} />
      <Stack.Screen name="FAQ" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'black' } }} component={FAQ} />
      <Stack.Screen name="WaterTalk" options={{ headerShown: true, title: 'Water Talk', headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: 'Water Talk', headerTitleStyle: { color: 'black' } }} component={WaterTalk} />
      <Stack.Screen name="WaterPal" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'red' } }} component={WaterPal} />
    </Stack.Navigator>
  )

}

export default ActivityStack;
//  <Stack.Screen name="ThingsSpeak" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'red' } }} component={ThingsSpeak} />
//      <Stack.Screen name="StudentHome" options={{ headerShown: true, title: 'Student WaterPAL', headerTitleStyle: { color: global.primary } }} component={StudentHomeScreen} />