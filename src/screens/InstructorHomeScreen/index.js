import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from 'react-native';
import { ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardItem from '../../components/CardItem';
import axios from 'axios';

//var initData = ''
/*
const initData = [
  {
    id: 7,
    activityName: 'Water Pump',
    imagePath: require('../../assets/DIY_Water_Test.jpg'),
    description: 'Construct a set of connected bottles, visualize water moving to equilibrium, and watch the water stop flowing when the water level is equal.',
    grade: 0,
    // pdfPath: require('/Users/leonardoflorero/Developer/ReactNativeProjects/NpxProjects/waterpal/assets/pdfs/JarTestHandout.pdf'),
  },
  {
    id: 6,
    activityName: 'Water Tower',
    imagePath: require('../../assets/DIY_Water_Test.jpg'),
    description: 'To enable students to calculate the water pressure at different levels in the graduated cylinder by measuring the distance that water sprays out of holes at various heights.',
    grade: 0,
    // pdfPath: require('/Users/leonardoflorero/Developer/ReactNativeProjects/NpxProjects/waterpal/assets/pdfs/JarTestHandout.pdf'),
  },
  {
    id: 5,
    activityName: 'DIY Watershed',
    imagePath: require('../../assets/DIY_Water_Test.jpg'),
    description: 'Understand how a watershed operates in our everyday surroundings by using a watershed model made from simple materials.',
    grade: 0,
    // pdfPath: require('/Users/leonardoflorero/Developer/ReactNativeProjects/NpxProjects/waterpal/assets/pdfs/JarTestHandout.pdf'),
  },
  {
    id: 4,
    activityName: 'Gas Transfer',
    imagePath: require(r),
    description: 'Understand how treatment works using transfer of gas to treat wastewater and surface water using various chemicals to maintain safe levels of organic matter in water. ',
    grade: 0,
    // pdfPath: require('/Users/leonardoflorero/Developer/ReactNativeProjects/NpxProjects/waterpal/assets/pdfs/JarTestHandout.pdf'),
  },
  {
    id: 3,
    activityName: 'DIY Water Filter',
    imagePath: require('../../assets/DIY_Water_Test.jpg'),
    description: 'Construct a simple water filter and run dirty water through the filter to show the before and after of the water sample.  ',
    grade: 0,
    // pdfPath: require('/Users/leonardoflorero/Developer/ReactNativeProjects/NpxProjects/waterpal/assets/pdfs/JarTestHandout.pdf'),
  },
  {
    id: 2,
    activityName: 'Jar Test',
    imagePath: require('../../assets/Jartest.jpeg'),
    description: 'There are many ways in which wastewater is treated, all of which are extremely important for ensuring safe drinking water. In this activity students will explore the Jar Test which is a test used to estimate the minimum coagulant dose required to achieve certain water quality goals.',
    grade: 'Middle School',
    // pdfPath: require('/Users/leonardoflorero/Developer/ReactNativeProjects/NpxProjects/waterpal/assets/pdfs/JarTestHandout.pdf'),
    pdfPath: require('../../assets/pdfs/JarTestHandout.pdf'),
  },
  {
    id: 1,
    activityName: 'Water Quality Parameters',
    imagePath: require('../../assets/AcitvityImages/WaterQuality.png'),
    description: 'Testing the quality of water is an extremely important aspect of water and wastewater management. In this activity students will learn about the parameters that need to be met in order for water to pass various quality tests.',
    grade: 0,

    // pdfPath: require('/Users/leonardoflorero/Developer/ReactNativeProjects/NpxProjects/waterpal/assets/pdfs/WaterQualityParametersHandout.pdf'),
    pdfPath: require('../../assets/pdfs/WaterQualityParametersHandout.pdf'),
  }
]
*/
/*
axios.get("http://47.89.252.2:5000/WaterBackend/TeacherInfo.php").then(
  response => {
      initData = response.data
      //console.log(initData)
  }
)
*/
const InstructorHomeScreen = ({ navigation ,route}) => 
{

  //const {Role} = route.params;
  //console.log(Role);

  //axios.get("http://47.89.252.2:7800/TeacherInfo.php")

  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("http://47.89.252.2:5000/WaterBackend/TeacherInfo.php");
    setData(data);
    console.log(data)
  };

  useEffect(() => {
    getData();
  }, []);


  var filteredData = [];
/*
  const resetData = () => 
  {
    setData(initData);
  }
*/
  const renderItem = ({ item }) => (

    <CardItem
      activityName={item.activityName}
      imagePath={item.imagePath}
      description={item.description}
      Experiment_Duration={item.Experiment_Duration}
    // grade={item.grade}
    // pdfPath={item.pdfPath}
    // videoPath={item.videoPath}
    />
  );
  

  const renderButton = ({ item }) => (
    <SelectionButton grades={item.grades} />
  );

  return (
    <SafeAreaView>
        {/* <FlatList
          data={Buttons}
          renderItem={renderButton}
          keyExtractor={item2 => item2.id}
          style={selectionBarStyles.bar}
          horizontal={true}
        /> */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={homeStyles.overallContainer}
        />
    </SafeAreaView>
  );

};


export default InstructorHomeScreen;

const selectionBarStyles = StyleSheet.create({
  bar: {
    width: '100%',
    height: 65,
    backgroundColor: 'white',

  }
})

const homeStyles = StyleSheet.create({
  overallContainer: {
    width: '100%',
    height: '100%'
  },
  differentViewsContainer: {
    paddingLeft: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    flexDirection: 'row',
  }
});


