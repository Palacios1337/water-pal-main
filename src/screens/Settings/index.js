import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { label: 'User Profile', value: '1' },
  { label: 'Password', value: '2' },
  { label: 'Help', value: '3'},
  { label: 'About', value: '4'},
  { label: 'Logout', value: '5'}
];
const Settings = ({ route,navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    if (option.value === '1') {
      console.log('UserProfile');
      navigation.navigate('UserProfile');
    } else if (option.value === '2') {
      console.log('Password');
      navigation.navigate('Password');
    } else if (option.value === '3') {
      console.log('Help');
      navigation.navigate('Help');
    } else if (option.value === '4') {
      console.log('About');
      navigation.navigate('About');
    } else if (option.value === '5') {
      console.log('Logout');
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    // Clear the selected option when the component is mounted (user returns to the menu)
    setSelectedOption(null);
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        {data.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.menuItem,
              selectedOption && selectedOption.value === option.value && styles.selectedMenuItem,
            ]}
            onPress={() => {handleOptionSelect(option);
                            setSelectedOption(null);
            }}
          >
            <Text style={styles.menuItemText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menu: {
    marginVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    
  },
  selectedMenuItem: {
    backgroundColor: '#F0F0F0', // Background color for selected item
  },
  menuItemText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    color: '#33ACDE',
  },
});
