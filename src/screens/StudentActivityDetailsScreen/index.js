import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ImageBackground,FlatList,Platform,PermissionsAndroid,Button, TouchableHighlight } from 'react-native';
import Video from 'react-native-video';
import YoutubePlayer from 'react-native-youtube-iframe';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { shareAsync } from 'expo-sharing';

const Activitydetailsscreen = ({ route, navigation }) =>
{

    const { name, grade, pdfPath, videoPath,Experiment_Duration,Expectations,Objectives,Delivery,Procedures,Assessment } = route.params


    const downloadFromUrl = async() => {


        console.log('clicked');

        const filename = name + ".pdf"
        const result =  await FileSystem.downloadAsync(pdfPath,FileSystem.documentDirectory + filename);
      
        console.log(result);
      
        save(result.uri, filename, result.headers["Content-Type"]);
      };
      
      const save = async (uri, filename, mimetype) => {
        if (Platform.OS === "android") {
          const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
          if (permissions.granted) {
            const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
            await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, mimetype)
              .then(async (uri) => {
                await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
              })
              .catch(e => console.log(e));
          
            } 
          }
      };

    console.log(Experiment_Duration)
    var gradename = "Middle School"

    if (grade == 6){
        gradename = "Middle School"
    }else{
        gradename = "High School"
    }


            return (

                <ScrollView style={styles.scrollContainer}  overScrollMode={"never"}>
                    <View>
                   <YoutubePlayer
                        webViewStyle={ {opacity:0.99} }
                        height={300}
                        play={true}
                        videoId = {videoPath}
                    />
                    </View>

                    <Text style={styles.titleText}>{name}</Text>
                    <Text style={styles.gradeText}>Grade: {gradename}</Text>
                    <Text style={styles.gradeText}>Experiment Duration: {Experiment_Duration} Minutes</Text>


                    <View style={styles.descriptionContainer}>
                    <Text style={styles.detailsText} >Expectations</Text>
                    <Text style={styles.descriptionText}>
                        {Expectations}
                    </Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                    <Text style={styles.detailsText}>Sample Data/Tables if Needed</Text>
                    <Text style={styles.descriptionText}>
                        N/A  
                    </Text>
                    </View>
                    
                    <View style={styles.descriptionContainer}>
                    <Text style={styles.detailsText} >Context For Learnining</Text>
                    <Text style={styles.descriptionText}>
                        {Objectives}
                    </Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                    <Text style={styles.detailsText} >Instructional Delivery</Text>

                    <Text style={styles.descriptionText}>
                        Materials:
                    </Text>

                    <Text style={styles.descriptionText}>
                        {Delivery}
                        {'\n'}
                    </Text>
                    <Text style={styles.detailsText}>
                        Procedures:
                    </Text>
                    <Text style={styles.descriptionText}>
                        {Procedures}
                        {'\n'}
                    </Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                    <Text style={styles.detailsText} >Assessment</Text>
                    <Text style={styles.descriptionText}>
                    {Assessment}
                    </Text>
                    </View>

                   <Text style={styles.attachmentsText}>Attachments</Text>
                   <TouchableOpacity style = {styles.pdfImage}  onPress={downloadFromUrl}>
                    <Image style = {styles.pdfImage}  source={require('../../assets/PDF.png')}/>
                    </TouchableOpacity >
                   <Text style={styles.descriptionText}>
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        {'\n'}
                    </Text>
                </ScrollView>
        ); 


    /*
                    */

    }

const styles = StyleSheet.create({

    container:{
        flex: 1,
    },
    imageContainer: {
        width: '100%',
        top: 0,
        position: 'absolute',
    },
    videoContainer: {
        width: '100%',
        height: 240,
        // width: '100%',
        // top: 0,
        // backgroundColor: 'black',
        // opacity: 90
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 23,
        paddingLeft: 10,
        // color: '#00bd48',
        color: global.primary,
        paddingTop: 10,
    },
    gradeText: {
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 15,
        fontSize: 15,
    },
    descriptionContainer: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    detailsText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    descriptionText: {
        paddingTop: 10,
        fontSize: 13
    },
    attachmentsText: {
        paddingLeft: 10,
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 15
    },
    pdfImage: {
        width: 70,
        height: 70,
        // tintColor: '#00bd48',
        tintColor: global.primary,
    },
    pdfImageContainer: {
        paddingTop: 15,
        paddingLeft: 10
    },
    downloadImageContainer: {
        paddingTop: 10,
        paddingLeft: 20
    },
    downloadImage: {
        width: 40,
        height: 40,
        color: 'green'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})

export default Activitydetailsscreen;