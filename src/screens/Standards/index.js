import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, } from 'react-native'
import React from 'react';
import { List } from 'react-native-paper';
import axios from 'axios';

const Standards = ({route,navigation}) =>
{

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  //https://www.nextgenscience.org/pe/ms-ps1-2-matter-and-its-interactions
  const newchapter = (Standard) => {

   console.log("http://47.89.252.2:5000/standards.php?!="+Standard)
    axios.get("http://47.89.252.2:5000/standards.php?!="+Standard).then(
      response => {
        //console.log(response.data)
        navigation.navigate("StandardsInfo",{link:response.data.link})
      },
    )
    //if (Standard == "MS-PS1-2"){
     // navigation.navigate("StandardsInfo",{link: "https://www.nextgenscience.org/pe/ms-ps1-2-matter-and-its-interactions"})
   // }

  };



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
                  <List.Item title="MS-PS1-2" onPress={() => newchapter("MS-PS1-2")}/>
                  <List.Item title="MS-ETS1-3" onPress={() => newchapter("MS-ETS1-3")}/>
                </List.Accordion>
              </View>
              <View>
                <List.Accordion
                  title="Grades 9-12"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="HS-PS1-5" onPress={() => newchapter("HS-PS1-5")}/>
                </List.Accordion>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Gas Transfer"
              left={props => <List.Icon {...props} icon="circle" />}
              theme={{ colors: { primary: '#32ba00' } }}
              >
              <View>
                <List.Accordion
                  title="Grades 5-8"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="MS-ETS1-1" onPress={() => newchapter("MS-ETS1-1")}/>
                </List.Accordion>
              </View>
              <View>
                <List.Accordion
                  title="Grades 9-12"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="N/A" />
                </List.Accordion>
              </View>
            </List.Accordion>

            <List.Accordion
              title="DIY WaterShed"
              left={props => <List.Icon {...props} icon="circle" />}
              theme={{ colors: { primary: '#32ba00' } }}
              expanded1={expanded}
              onPress={handlePress}>
              <View>
                <List.Accordion
                  title="Grades 5-8"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="MS-ETS1-3" onPress={() => newchapter("MS-ETS1-3")}/>
                  <List.Item title="MS-ETS1-4" onPress={() => newchapter("MS-ETS1-4")}/>
                </List.Accordion>
              </View>
              <View>
                <List.Accordion
                  title="Grades 9-12"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="N/A" />
                </List.Accordion>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Water Wheels"
              left={props => <List.Icon {...props} icon="circle" />}
              theme={{ colors: { primary: '#32ba00' } }}
              >
              <View>
                <List.Accordion
                  title="Grades 5-8"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="MS-PS1-2" onPress={() => newchapter("MS-PS1-2")}/>
                  <List.Item title="MS-ETS1-3" onPress={() => newchapter("MS-ETS1-3")}/>
                </List.Accordion>
              </View>
              <View>
                <List.Accordion
                  title="Grades 9-12"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="N/A" />
                </List.Accordion>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Testing Water Quality"
              left={props => <List.Icon {...props} icon="circle" />}
              theme={{ colors: { primary: '#32ba00' } }}
              >
              <View>
                <List.Accordion
                  title="Grades 5-8"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="MS-ETS1-1" onPress={() => newchapter("MS-ETS1-1")} />
                </List.Accordion>
              </View>
              <View>
                <List.Accordion
                  title="Grades 9-12"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="N/A" />
                </List.Accordion>
              </View>
            </List.Accordion>

            <List.Accordion
              title="DIY Water Filters"
              left={props => <List.Icon {...props} icon="circle" />}
              theme={{ colors: { primary: '#32ba00' } }}
              >
              <View>
                <List.Accordion
                  title="Grades 5-8"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="MS-LS2-5" onPress={() => newchapter("MS-LS2-5")}/>
                  <List.Item title="MS-ETS1-4" onPress={() => newchapter("MS-ETS1-4")}/>
                </List.Accordion>
              </View>
              <View>
                <List.Accordion
                  title="Grades 9-12"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="HS-ETS1-2" onPress={() => newchapter("HS-ETS1-2")}/>
                </List.Accordion>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Water Tower"
              left={props => <List.Icon {...props} icon="circle" />}
              theme={{ colors: { primary: '#32ba00' } }}
            >
              <View>
                <List.Accordion
                  title="Grades 5-8"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="MS-ETS1-3" onPress={() => newchapter("MS-ETS1-3")}/>
                  <List.Item title="MS-ETS1-4" onPress={() => newchapter("MS-ETS1-4")}/>
                </List.Accordion>
              </View>
              <View>
                <List.Accordion
                  title="Grades 9-12"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="N/A" />
                </List.Accordion>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Water Pumps"
              left={props => <List.Icon {...props} icon="circle" />}
              theme={{ colors: { primary: '#32ba00' } }}
              >
              <View>
                <List.Accordion
                  title="Grades 5-8"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="N/A" />
                </List.Accordion>
              </View>
              <View>
                <List.Accordion
                  title="Grades 9-12"
                  left={props => <List.Icon {...props} icon="square" />}
                  theme={{ colors: { primary: '#32ba00' } }}>
                  <List.Item title="N/A" />
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
    height: '94%',
    //<List.Item title="Answer goes here" />
  },
  ListSectionContainer: {
    //backgroundColor: '#283654',
    fontSize: 10,
  },
});
