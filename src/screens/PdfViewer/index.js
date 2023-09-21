import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';
//import Pdf from 'react-native-pdf';


const PdfViewer = ({ route, navigation }) =>
{
    const myPath = route.params.myPath
    console.log(myPath)
    const handlePress = () =>
    {
        console.log("dfdfd")
    }


    return (
        <View style={styles.container}>
              <Pdf
                source={myPath}
                onLoadComplete={(numberOfPages, filePath) =>
                {
                    console.log(`Number of pages: ${numberOfPages}`);
                   
                }}
                onPageChanged={(page, numberOfPages) =>
                {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) =>
                {
                    // console.log(myPath)
                    // console.log(newPath)
                    console.log(error);
                }}
                onPressLink={(uri) =>
                {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />   
        </View>
    )
}

export default PdfViewer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});