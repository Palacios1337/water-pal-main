import React from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import { List } from 'react-native-paper';

const Faq = () =>
{

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View>
            <ScrollView style={styles.ScrollViewContainer}>
                <List.Section
                    title="Frequently Asked Questions"
                    style={styles.ListSectionContainer}>
                    <List.Accordion
                        title="What is this app?"
                        left={props => <List.Icon {...props} icon="circle" />}
                        theme={{ colors: { primary: '#32ba00' } }}>
                        <List.Item title="App description here" />
                    </List.Accordion>

                    <List.Accordion
                        title="Question 2 Here"
                        left={props => <List.Icon {...props} icon="circle" />}
                        theme={{ colors: { primary: '#32ba00' } }}
                        expanded0={expanded}
                        onPress={handlePress}>
                        <List.Item title="Answer goes here" />
                    </List.Accordion>

                    <List.Accordion
                        title="Question 3 Here"
                        left={props => <List.Icon {...props} icon="circle" />}
                        theme={{ colors: { primary: '#32ba00' } }}
                        expanded1={expanded}
                        onPress={handlePress}>
                        <List.Item title="Answer goes here" />
                    </List.Accordion>

                    <List.Accordion
                        title="Question 4 Here"
                        left={props => <List.Icon {...props} icon="circle" />}
                        theme={{ colors: { primary: '#32ba00' } }}
                        expanded2={expanded}
                        onPress={handlePress}>
                        <List.Item title="Answer goes here" />
                    </List.Accordion>

                    <List.Accordion
                        title="Question 5 Here"
                        left={props => <List.Icon {...props} icon="circle" />}
                        theme={{ colors: { primary: '#32ba00' } }}
                        expanded3={expanded}
                        onPress={handlePress}>
                        <List.Item title="Answer goes here" />
                    </List.Accordion>

                    <List.Accordion
                        title="Question 6 Here"
                        left={props => <List.Icon {...props} icon="circle" />}
                        theme={{ colors: { primary: '#32ba00' } }}
                        expanded4={expanded}
                        onPress={handlePress}>
                        <List.Item title="Answer goes here" />
                    </List.Accordion>

                    <List.Accordion
                        title="Question 7 Here"
                        left={props => <List.Icon {...props} icon="circle" />}
                        theme={{ colors: { primary: '#32ba00' } }}
                        expanded5={expanded}
                        onPress={handlePress}>
                        <List.Item title="Answer goes here" />
                    </List.Accordion>

                    <List.Accordion
                        title="Question 8 Here"
                        left={props => <List.Icon {...props} icon="circle" />}
                        theme={{ colors: { primary: '#32ba00' } }}
                        expanded6={expanded}
                        onPress={handlePress}>
                        <List.Item title="Answer goes here" />
                    </List.Accordion>

                    <List.Accordion
                        title="Question 9 Here"
                        left={props => <List.Icon {...props} icon="circle" />}
                        theme={{ colors: { primary: '#32ba00' } }}
                        expanded7={expanded}
                        onPress={handlePress}>
                        <List.Item title="Answer goes here" />
                    </List.Accordion>

                    <List.Accordion
                        title="Question 10 Here"
                        left={props => <List.Icon {...props} icon="circle" />}
                        theme={{ colors: { primary: '#32ba00' } }}
                        expanded8={expanded}
                        onPress={handlePress}>
                        <List.Item title="Answer goes here" />
                    </List.Accordion>
                </List.Section>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    ScrollViewContainer: {
        // backgroundColor: 'red',
        width: '100%',
        //top: 0,
        // bottom: 150,
        height: '90%',

    },
    ListSectionContainer: {
        //backgroundColor: '#283654',
    },
});

export default Faq;
