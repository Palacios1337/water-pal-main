import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from 'react-native';
import { ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardItem from '../../components/CardItem';
import StudentCardItem from '../../components/StudentCardItem'

const initData = [
  {
    id: 2,
    activityName: 'WaterTalk',
    imagePath: require('../../assets/AcitvityImages/WaterQuality.png'),
    description: 'Watch and Communicate with the water tank.',
  },
  {
    id: 1,
    activityName: 'WaterPal',
    imagePath: require('../../assets/WaterPal.jpg'),
    description: 'Play the hit game WATER PAL!',
  }
];

const StudentHomeScreen = ({ navigation }) => 
{

  const [DATA, setData] = useState(initData);
  var filteredData = [];

  const resetData = () => 
  {
    setData(initData);
  }


  const SelectionButton = (props) =>
  {
    const handleGradeSelection = (grade) =>
    {
      if (grade === 'All')
      {
        setData(initData)
      }
    }

    return (
      <View style={{ alignSelf: 'center', paddingRight: 20, paddingLeft: 20 }}>
        <TouchableOpacity
          style={{ backgroundColor: global.ternary, width: 110, height: 35, alignSelf: 'center', justifyContent: 'center', borderRadius: 15 }}
          onPress={() => handleGradeSelection(props.grades)}
        >
          <Text
            style={{ color: global.secondary, fontWeight: 'bold', fontSize: 15, alignSelf: 'center' }}
          >
            Grade: {props.grades}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <StudentCardItem
      activityName={item.activityName}
      imagePath={item.imagePath}
      description={item.description}
    />
  );

  const renderButton = ({ item }) => (
    <SelectionButton grades={item.grades} />
  );

  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: '95%' }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={homeStyles.overallContainer}
        />
      </View>
    </SafeAreaView>
  );

};


export default StudentHomeScreen;

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


