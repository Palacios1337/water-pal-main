import React, {useState, useEffect} from 'react';
import { View, StyleSheet, ScrollView, Text,Button,TouchableOpacity,TextInput} from 'react-native';
import { Slider } from 'react-native-elements/dist';
import { SliderBox } from 'react-native-image-slider-box';
import {WebView} from "react-native-webview"


var fiveSecInterval;
const WaterTalk = () =>
{
    /*

    */

    var[test,settest] = useState(0);
    var[LinkPicked,setLinkPicked] = useState('<iframe width=1199 height="700" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1892223/charts/1?&width=1200&height=700"></iframe>');
    var[text, onChangeText] = useState('Enter IP Ex: 192.168.137.38');
    var[htmlLink,sethtmlLink] = useState()
 
    useEffect(() => {
        clearInterval(fiveSecInterval);
    fiveSecInterval = setInterval(() => {
        if (test ==1 ){
            settest(10);
        }else if (test == 2){
            settest(11);
        }else if (test == 3){
            settest(12);
        }else if (test == 10){
            settest(1);
        }else if (test == 11){
            settest(2);
        }else if (test == 12){
            settest(3);
        }
    }, 5000);
        console.log(test)
       switch(test){
        case 1:setLinkPicked ('<iframe width=1200 height="700" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1892223/charts/1?&width=1200&height=700"></iframe>') ;break;
        case 2:setLinkPicked ('<iframe width=1200 height="700" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1892223/charts/2?&width=1200&height=700"></iframe>') ;break;
        case 3:setLinkPicked ('<iframe width=1200  height="700" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1892223/charts/3?&width=1200&height=700"></iframe>') ;break;
        case 10:setLinkPicked ('<iframe width=1200.1 height="700" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1892223/charts/1?&width=1200&height=700"></iframe>') ;break;
        case 11:setLinkPicked ('<iframe width=1200.1 height="700" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1892223/charts/2?&width=1200&height=700"></iframe>') ;break;
        case 12:setLinkPicked ('<iframe width=1200.1 height="700" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1892223/charts/3?&width=1200&height=700"></iframe>') ;break;
       }
       
      },[test]);
    

      useEffect(() => {
        sethtmlLink('<iframe width="900" height="700" style="border: 1px solid #cccccc;" src="http://'+text+':8000/index.html"></iframe>')
        console.log(htmlLink)
      },[text]);
    const images = [
        require('../../assets/DIY_Water_Test.jpg'),
        require('../../assets/tank.jpeg'),
        require('../../assets/Jartest.jpeg'),
    ]
    /*
    if (test ==1 ){
        settest(10);
    }else if (test == 2){
        settest(11);
    }else if (test == 3){
        settest(12);
    }else if (test == 10){
        settest(1);
    }else if (test == 11){
        settest(2);
    }else if (test == 12){
        settest(3);
    }
    */
//'<iframe width="900" height="700" style="border: 1px solid #cccccc;" src="http://192.168.137.38:8000/index.html"></iframe>'

    return(
        <ScrollView style = {styles.container}>
            <SliderBox 
            images={images}
            dotColor="white"
            inactiveDotColor="black"
            dotStyle={{height: 20, width: 20, borderRadius: 50}}
            imageLoadingColor="black"
            autoplay={true}
            autoplayInterval={3000}
            circleLoop = {true}
            />
                <WebView
            androidHardwareAccelerationDisabled={true}
            automaticallyAdjustContentInsets={false}
            style={{opacity:.99,overflow: 'hidden', height:250 , width: '100%' }}
            source={{html:LinkPicked}}
        />
        <View style = {styles.TSContainer}>
            <View style = {styles.fixToText}>
                    <TouchableOpacity style= {styles.TSButton} onPress={()=> {
                        if (test != 1){
                            settest(1);
                        }else{
                            settest(10);
                        }
                        }}>
                       <Text style = {styles.TSButtonText}>
                            View Temperature
                       </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style= {styles.TSButton} onPress={()=> {
                        if(test !=2){
                            settest(2);
                        }else{
                            settest(11);
                        }
                        }}>
                        <Text style = {styles.TSButtonText}>
                            View pH
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style= {styles.TSButton}onPress={()=> {
                        if(test != 3){
                            settest(3);
                        }else{
                            settest(12);}
                        }}>
                       <Text style = {styles.TSButtonText}>
                            View TDS
                       </Text>
                    </TouchableOpacity>
            </View>
            <View style = {styles.fixToText}>
                    <TouchableOpacity style= {styles.TSButton2}>
                        <Text style = {styles.TSButtonText}>
                            Change Temperature
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style= {styles.TSButton2}>
                       <Text style = {styles.TSButtonText}>
                            Change pH
                       </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style= {styles.TSButton2}>
                        <Text style = {styles.TSButtonText}>
                            Change TDS
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>

        <WebView
            androidHardwareAccelerationDisabled={true}
            automaticallyAdjustContentInsets={false}
            style={{opacity:.99,overflow: 'hidden', height:250 , width: '100%' }}
            source={{html:htmlLink}}
        />

     <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter IP Ex: 192.168.137.38"
      />


        <View style={styles.barspacecontainer}>

        </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    ScrollViewContainer: {
        // backgroundColor: 'red',
        width: '100%',
        //top: 0,
        // bottom: 150,
        height: 40000,

    },
    ListSectionContainer: {
        //backgroundColor: '#283654',
    },
    container:{
        flex: 1,
        height:100
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 23,
        paddingLeft: 10,
        // color: '#00bd48',
        color: global.primary,
        paddingTop: 10,
    },
    TSContainer:{
        flex: 1,
        width: '100%',
        height: 105,
        backgroundColor:'#ffffff'
    },
    TSButton: {
        // backgroundColor: '#32ba00',
        backgroundColor: '#ADD8E6',
        height: 50,
        justifyContent: 'center',
        width: 135,
        alignItems: 'center',
        borderRadius: 15,
        left: 0,
    },
    TSButton2: {
        // backgroundColor: '#32ba00',
        backgroundColor: '#ADD8E6',
        height: 50,
        justifyContent: 'center',
        width: 135,
        alignItems: 'center',
        borderRadius: 15,
        top: 5,
    },
    TSButtonText:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',

    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
    container:{
    flex: 1,
    height: 900
},
barspacecontainer:{
    height: 200,
    width: '100%',
},
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default WaterTalk;

/*
            <View style = {styles.fixToText}>
                <View>
                    <TouchableOpacity style= {styles.TSButton}>
                       <Text style = {styles.TSButtonText}>
                            View Temperature
                       </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style= {styles.TSButton}>
                        <Text style = {styles.TSButtonText}>
                            View Temperature
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            */