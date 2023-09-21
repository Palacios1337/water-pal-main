import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core'
import InstructorHomeScreen from './screens/InstructorHomeScreen';
import StudentHomeScreen from './screens/StudentHomeScreen';
import Activitydetailsscreen from './screens/ActivityDetailsScreen';
import PdfViewer from './screens/PdfViewer';
import GradeSelection from './screens/GradeSelection';
import FAQ from "./screens/FAQ"
import ThingsSpeak from './screens/ThingsSpeak';

const Stack = createNativeStackNavigator();

const ActivityStack = (navigation,route) => 
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="InstructorHome" options={{ headerShown: true, title: 'Teacher WaterPal', headerTitleStyle: { color: 'white'}, headerStyle:{backgroundColor: '#89CFF0'}}} component={InstructorHomeScreen} />
      <Stack.Screen name="GradeSelection" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'red' } }} component={GradeSelection} />
      <Stack.Screen name="ActivityDetails" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: 'Activity Details', headerTitleStyle: { color: global.primary } }} component={Activitydetailsscreen} />
      <Stack.Screen name="PdfViewer" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'red' } }} component={PdfViewer} />
      <Stack.Screen name="FAQ" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'red' } }} component={FAQ} />
      <Stack.Screen name="ThingsSpeak" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: global.primary, headerTitle: '', headerTitleStyle: { color: 'red' } }} component={ThingsSpeak} />
      {/* <Stack.Screen name="InstructorHome" options={{ headerShown: true, title: 'WaterPAL', headerTitleStyle: { color: '#2BD109' } }} component={InstructorHomeScreen} />
      <Stack.Screen name="ActivityDetails" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: '#2BD109', headerTitle: 'Activity Details', headerTitleStyle: { color: '#2BD109' } }} component={Activitydetailsscreen} />
      <Stack.Screen name="PDF" options={{ headerShown: true, headerBackTitle: 'Back', headerTintColor: '#2BD109', headerTitle: '', headerTitleStyle: { color: 'red' } }} component={PDFExample} /> */}
    </Stack.Navigator>
  )

}

export default ActivityStack;

//      <Stack.Screen name="StudentHome" options={{ headerShown: true, title: 'Student WaterPAL', headerTitleStyle: { color: global.primary } }} component={StudentHomeScreen} />