import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const GradeSelection = ({ route, navigation }) =>
{
    const { activityName } = route.params

    const handleGradeSelection = (grade) =>
    {
        if (activityName === "Jar Test")
        {

            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade },
            });

        }
        else if (activityName === "Water Quality Parameters")
        {
            
            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade}
            });
        }
        else if (activityName === "DIY Water Filter")
        {

            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade },
            });
        }else if (activityName === "Gas Transfer")
        {
            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade},
            });
        }else if (activityName === "DIY Watershed")
        {
            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade },
            });
        }else if (activityName === "Water Pump")
        {
            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade},
            });
            
        }else if (activityName === "Water Tower")
        {
            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade},
            });
        }
    }

    return (
        <SafeAreaView>
            <Text style={styles.header}>Select A Grade</Text>

            <View style={{ padding: 20 }}>
                <Button
                    buttonStyle={{borderRadius: 20,marginTop:10}}
                    title = 'Middle School'
                    onPress={() => {
                        handleGradeSelection(6) // = middleschool
                      }}

                />
            </View>

            <View style={{ padding: 20 }}>
                <Button
                    buttonStyle={{borderRadius: 20,marginTop:10}}
                    title = 'High School'
                    onPress={() => {
                        handleGradeSelection(9) // = highschool
                      }}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        paddingBottom: 20,
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    button: {
        width: '80%',
        height: 60,
        backgroundColor: global.primary,
        alignSelf: 'center',
        borderRadius: 15,
        justifyContent: 'center'
    },
    gradeTitle: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'

    }
})

export default GradeSelection;
