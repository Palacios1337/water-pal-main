import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, } from 'react-native'
import React from 'react';
import { List } from 'react-native-paper';

const Standards = () =>
{

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeAreaView>
      <View>
        <ScrollView style={styles.ScrollViewContainer}>
          <List.Section
            title="List of Standards per Grade Level"
            style={styles.ListSectionContainer}>

            <List.Accordion
              title="Jar Test"
              left={props => <List.Icon {...props} icon="circle" />}
              theme={{ colors: { primary: '#32ba00' } }}>
              <View>
                <List.Accordion
                  title="Grades 5-8"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="MS-PS1-2" />
                  <List.Item title="MS-EST1-3" />
                </List.Accordion>
              </View>
              <View>
                <List.Accordion
                  title="Grades 9-12"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="HS-PS1-5" />
                  <List.Item title="HSF.IF.C.7" />
                </List.Accordion>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Gas Transfer"
              left={props => <List.Icon {...props} icon="circle" />}
              theme={{ colors: { primary: '#32ba00' } }}
              expanded1={expanded}
              onPress={handlePress}>
              <View>
                <List.Accordion
                  title="Grades 5-8"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="MS-PS1-2" />
                  <List.Item title="MS-EST1-3" />
                </List.Accordion>
              </View>
              <View>
                <List.Accordion
                  title="Grades 9-12"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="HS-PS1-5" />
                  <List.Item title="HSF.IF.C.7" />
                </List.Accordion>
              </View>
            </List.Accordion>

          </List.Section>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Standards;

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
