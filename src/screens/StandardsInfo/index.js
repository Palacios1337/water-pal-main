import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, } from 'react-native'
import React from 'react';
import { List } from 'react-native-paper';
import WebView from 'react-native-webview';

const StandardsInfo = ({route,navigation}) =>
{
  console.log(route.params.link)
  return (
    <WebView
    androidHardwareAccelerationDisabled={true}
    automaticallyAdjustContentInsets={false}
    style={{opacity:.99,overflow: 'hidden', height:100 , width: '100%' }}

    source={{uri:route.params.link}}
    />
  );
};

export default StandardsInfo;

const styles = StyleSheet.create({
  ScrollViewContainer: {
    // backgroundColor: 'red',
    width: '100%',
    //top: 0,
    // bottom: 150,
    height: '90%',
    //<List.Item title="Answer goes here" />
  },
  ListSectionContainer: {
    //backgroundColor: '#283654',
    fontSize: 10,
  },
});
