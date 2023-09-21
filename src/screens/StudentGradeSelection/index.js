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
            var pdfPath = 'http://47.89.252.2:5000/Jar_Test_6-8.docx.pdf'
            var videoPath = '5sZNv6HPkiQ'
            var Experiment_Duration = 40
            var Expectations = '1.Observe the processes of coagulation and flocculation and how they relate to turbidity.\n2.Understand the impact suspended and dissolved solids have in water.\n3.Use simple, easy-to-learn lab equipment.\n4.Label beakers to ensure proper organization and to avoid confusion.\n5.Clearly labeled and neat collection of results.\n6.Communication and equal effort contribution as a team.\n7.Finding out by graphing and plotting data the optimal concentration of Alum.'
            var Objectives  = 'Find the dosage of Alum needed to effectively reduce the turbidity of the pond water.'
            var Delivery = 'Jar test apparatus\nFive 1000 mL beakers\nPond water (900 mL per beaker)\nPipettes\nAlum [Al2(SO4)3 * 18H2O] \nTurbidimeter\nSmall glass vials for turbidimeter\nStopwatch/timer \nTape (optional)\nMarker (Optional)'
            var Procedures = '1.Pour 900 mL of pond water into each beaker.\n2.Using a pipette, fill one glass vial up to the mark with water from one beaker.\n3.Put the vial in the turbidimeter such that the turbidity of the pond water prior to adding Alum may be measured, observed, and recorded.\n4.Add the water from the vial back into the beaker it was taken from.\n5.Place the 5 beakers in the jar testing apparatus and set the impellers to 30 rpm.\n6.Use a pipette to drop 3 mL of Alum into jar number one.\n7.Going left to right, repeat step 6 for each beaker but increase the concentration of Alum added by 3 mL each time (for values of 6, 9, 12, and 15 mL).\n8.Allow the Alum to be mixed rapidly for 1 to 2 minutes.\n9.Change the rpm of the impellers to 10 rpm, and allow the Alum to be stirred at this speed for another 5 minutes.\n10.Once time has passed, turn off the jar testing apparatus and take the impellers out of the beakers.\n11.Wait an additional 30 minutes without disturbing the beakers.\n12.Repeat step 3 for every beaker. This time, five separate values will be found, correlating to how turbidity changes as Alum dosage increases.\n13.Graph turbidity values versus the concentration of Alum.'
            var Assessment = "1.Why would the turbidimeter give a lower reading once the Alum distribution process is complete?\n\nThe water is more clear due to the sediments falling to the bottom of the jar\n\n2.What are some common things found in water that make it not clear? \n\nDirt, sediments, rock, natural debris \n\n3.Why do we like to drink clear water? \n\nIt's appealing to drink and gives the impression that the water is clean\n\n4.Why do we calculate the proper Alum dosage?\n\nSo that the treatment center knows how much Alum to put in the water, without spending too much money purchasing the chemical"
            
            if(grade == 9) {
                pdfPath = ('http://47.89.252.2:5000/Jar_Test_9-12.docx.pdf')
                var Assessment = "1.Why would the turbidimeter give a lower reading once the Alum distribution process is complete?\n\nThe water is more clear due to the sediments falling to the bottom of the jar\n\n2.What are some common things found in water that make it not clear? \n\nDirt, sediments, rock, natural debris \n\n3.Why do we like to drink clear water? \n\nIt's appealing to drink and gives the impression that the water is clean\n\n4.Why do we calculate the proper Alum dosage?\n\nSo that the treatment center knows how much Alum to put in the water, without spending too much money purchasing the chemical"
            }

            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade, videoPath: videoPath, pdfPath: pdfPath, Experiment_Duration: Experiment_Duration,Expectations,Objectives,Delivery,Procedures,Assessment },
            });

        }
        else if (activityName === "Water Quality Parameters")
        {
            var pdfPath = ('http://47.89.252.2:5000/Water_Quality_6-8.docx.pdf')
            var videoPath = '8SD8wTcanUE'
            var Experiment_Duration = 15
            var Expectations = "1.Understanding of the purpose and importance of testing water quality.\n2.Knowledge of the different types of test strips and their respective functions.\n3.Ability to follow the instructions provided with the test strips accurately.\n4.Proper labeling of water samples to avoid confusion.\n5.Record keeping of results in a clear and organized manner.\n6.Understanding of how to interpret results and make comparisons.\n7.Awareness of the potential impact of water quality on the environment and human health.\n8.Collaboration and teamwork in conducting the experiment.\n9.Responsibility in handling the equipment and supplies."
            var Objectives  = "To assess the water quality by using different types of test strips to measure parameters such as pH levels, nitrates, phosphates, and others, and to determine the overall water quality based on the results."
            var Delivery = "1.Water samples from the source to be tested.\n2.Different types of test strips (pH levels, alkalinity, nitrate, phosphate, and hardness)\n3.Clean containers for collecting water samples.\n4.Timer or stopwatch.\n5.Color chart provided with the test strips.\n6.Notebook for recording results.\n7.Writing utensil (pen or pencil).\n8.Ruler or measuring tape (if needed).\n9.Protective gloves (optional).\n10.Safety glasses (optional)."
            var Procedures = "1.Collect water samples from the source to be tested in clean containers.\n2.Label each container with the sample number or source location.\n3.Prepare the test strips by following the instructions provided on the packaging. Make sure to immerse the strips in the water sample for the specified amount of time.\n4.Remove the strips from the water sample and compare the color change on the strips to the color chart provided with the kit.\n5.Record the results for each type of test strip for each water sample in a notebook or data table.\n6.Repeat the testing process for all water samples collected."
            var Assessment = "1.What is the purpose of testing water quality?\n2.What are the different types of test strips used in this experiment?\n3. do you interpret the results of the test strips?\n4. is the importance of monitoring water quality?\n5.How can water quality impact human health and the environment?\n6.How can water treatment processes ensure the water being released back into the environment is safe?"
            
            if(grade == 9) {
                pdfPath = ('http://47.89.252.2:5000/Water_Quality_9-12.docx.pdf')
                var Assessment = "1.What is the purpose of testing water quality?\n2.What are the different types of test strips used in this experiment?\n3. do you interpret the results of the test strips?\n4. is the importance of monitoring water quality?\n5.How can water quality impact human health and the environment?\n6.How can water treatment processes ensure the water being released back into the environment is safe?\n7.What role does this experiment play in monitoring water quality and promoting environmental sustainability?\n8.Can you explain how the results of this experiment could be used to improve water treatment processes?\n9.How does this experiment relate to real-world water quality issues and their impact on society?"
            }
            
            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade, videoPath: videoPath, pdfPath: pdfPath, Experiment_Duration: Experiment_Duration,Expectations,Objectives,Delivery,Procedures,Assessment },
            });
        }
        else if (activityName === "DIY Water Filter")
        {
            var pdfPath = ('http://47.89.252.2:5000/DIY_Water_Filter_6-8.pdf')
            var videoPath = '5sZNv6HPkiQ'
            var Experiment_Duration = 30
            var Expectations = "Construct a simple water filter and run dirty water through the filter to show the before and after of the water sample."
            var Objectives  = 'Use common household materials to create a simple water filter \nUnderstand basic filtration principles and how different materials can be used to remove impurities from water \nGaining hands-on experience building and using a simple water filter \nLearning about the importance of clean water \nDevelop problem solving skills \n '
            var Delivery = '(1) 2 liter clear empty bottle \n(1) paper coffee filters\n(2) rubber bands\n(2) clear plastic cups\n(1 cup) sand\n(1+ cup) soil\n(1 cup) rocks\n(1 liter) of clean tap water\nscissors '
            var Procedures = '1. Take one 2 liter clear empty bottle and use the scissors to carefully remove about 3 inches from the bottom.\n2.Remove the cap from the bottle and securely fasten a coffee filter to the open end using two rubber bands.\n3.Set the bottle with the cap facing downward into an empty plastic cup.\n4. Place one cup of sand into the empty bottle, followed by one cup of soil, and then topped with one cup of rocks.\n5. Fill a clear empty cup halfway with clean tap water.\n6. Mix any remaining soil into the half-filled cup of clean tap water.\n7. Pour the cup of soil-water into the DIY filter bottle.\n8. Observe changes in the clarity of the water; If the water clarity has no apparent changes, take the filtered water and place into the DIY filter bottle for a second filtration.'
            var Assessment = 'What should we do if the water does not come out clean? Run the water through the filter again. add more rocks/soil/sand.\n\nWhat did you learn about the filtration process and how different materials can be used to filter water?\n\nCan you explain how the sand, soil, and rocks worked together to filter the water?\n\nHow can you apply what you learned in this lab to your everyday life or to help others in need of clean water?\n\nWhat are some other natural materials that can be used to filter water?Charcoal, mulch, sticks \n\nHow can you improve the filtration process?\n\nWhat are some of the risks of not having clean water and how can we prevent them?\n\n'
           
            if(grade == 9) {
                pdfPath = ('http://47.89.252.2:5000/DIY_Water_Filter_9-12.pdf')
                Assessment = 'What should we do if the water does not come out clean?\nRun the water through the filter again\nadd more rocks/soil/sand\nWhat did you learn about the filtration process and how different materials can be used to filter water?\n\nCan you explain how the sand, soil, and rocks worked together to filter the water?\n\nHow effective do you think the filter you built would be in removing impurities from real-world water sources?\n\nWhat are some of the challenges of using a simple filter like this in developing countries?\n\nHow can you apply what you learned in this lab to your everyday life or to help others in need of clean water?\n\nWhat are some other natural materials that can be used to filter water?\nCharcoal, mulch, sticks\n\nHow can you improve the filtration process?\n\nWhat are some of the risks of not having clean water and how can we prevent them?\n\n'
            }

            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade, videoPath: videoPath, pdfPath: pdfPath, Experiment_Duration: Experiment_Duration, Expectations, Objectives,Delivery,Procedures,Assessment },
            });
        }else if (activityName === "Gas Transfer")
        {
            var pdfPath = ('http://47.89.252.2:5000/Gas_Transfer_6-8.docx.pdf')
            var videoPath = '8SD8wTcanUE'
            var Experiment_Duration = 30
            var Expectations = "Be able to collect data or use the sample data to graph the points on an X and Y plot and determine the slope of the line, where the slope is the gas transfer coefficient,KLA"
            var Objectives  = 'Understand how treatment works using transfer of gas to treat wastewater and surface water using various chemicals to maintain safe levels of organic matter in water. ' 
            var Delivery = '1.Pond water (1000 mL)\n2.(1) 2000 mL beaker\n3.(1) Hot plate stirrer\n4.(1) Magnetic stirrer\n5.(1) mL measuring tool\n6.(1) Dissolved oxygen meter and probe\n7.Cobalt chloride (4 mL)\n8.Sodium Sulfate (8 mL)\n9.(1) Stopwatch\n10(1) Aerator' 
            var Procedures = '1.Place 1000 mL of the pond water into the beaker.\n2.Set the beaker on top of the hot plate stirrer, and place the magnetic stirrer inside the beaker.\n3.Turn on the hot plate stirrer.\n4.Insert the dissolved oxygen meter and probe and record the temperature of the water.\n5.Add 4 mL of cobalt chloride.\n6.Gradually add 8 mL of sodium sulfite, or until the dissolved oxygen meter is between 2-3 mg/L\n7.After the ideal dissolved oxygen reading is obtained, turn off the hot plate stirrer. \n8.Have a stopwatch ready, once the aerator is turned on and placed inside the beaker, record the dissolved oxygen values every 10 seconds for 2 minutes, and every minute for 18 minutes.\n9.Plot the data on the provided graph, or in Excel. \n10.Use the equation \n11.y=mx+b to determine the slope, m, which is the gas transfer coefficient, KLA\n'
            var Assessment = '1.Where are some places where algae grows?\nOceans, lakes, rivers, and ponds.\n\n2.Why is too much algae a bad thing?\nThe overgrowth of algae consumes the oxygen in the water, and blocks sunlight from underwater aquatic plants\n\n3.Why do we transfer oxygen into water?\nTo deter the spread of algae and protect aquatic life.\n\n4.Why is it important to maintain a steady range of oxygen in water?\nToo much oxygen or too little oxygen can be harmful to aquatic life'
            
            if(grade == 9) {
                pdfPath = ('http://47.89.252.2:5000/Gas_Transfer_9-12.docx.pdf')
                Assessment = '1.Where are some places where algae grows?\nOceans, lakes, rivers, and ponds.\n\n2.Why is too much algae a bad thing?\nThe overgrowth of algae consumes the oxygen in the water, and blocks sunlight from underwater aquatic plants\n\n3.Why do we transfer oxygen into water?\nTo deter the spread of algae and protect aquatic life.\n\n4.Why is it important to maintain a steady range of oxygen in water?\nToo much oxygen or too little oxygen can be harmful to aquatic life'
            }

            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade, videoPath: videoPath, pdfPath: pdfPath, Experiment_Duration: Experiment_Duration, Expectations, Objectives,Delivery,Procedures,Assessment },
            });
        }else if (activityName === "DIY Watershed")
        {
            var pdfPath = ('http://47.89.252.2:5000/DIY_Watershed_6-8.docx.pdf')
            var videoPath = '8SD8wTcanUE'
            var Experiment_Duration = 30
            var Expectations = "Understand how a watershed operates in our everyday surroundings by use of a watershed model made from simple materials."
            var Objectives  = '1.Use common household materials to create a simple DIY watershed\n2.Understand basic watershed principles and how different absorbent materials can be used to slow down the flow of water\n'
            var Delivery = '1.(1) 8 ½ x 11 printer paper\n2.(1) Cookie sheet\n3.Tape\n4.Colored markers\n5.(1) Spray bottle\n6.Cocoa powder\n7.(1) Bag of cotton balls' 
            var Procedures = '1.Place the cookie sheet on the table\n2.Crumple up one piece of paper\n3.Uncrumple the paper, and tape the edges of the paper to the cookie sheet \n4.Taking the colored markers, highlight the crumpled tops of the paper\n5.Fill the spray bottle with water, and lightly spray the paper\n6.Observe how the water travels from the highest top of the paper and pools at the lowest point of the paper\n7.Next, sprinkle the same piece of paper lightly with cocoa powder, this will simulate pollutant in the water\n8.Repeat the same process again, spray the paper lightly with water from the spray bottle\n9.Observe how the cocoa powder mixes with the water, turning it brown and pooling at the lowest point\n10.Empty the existing water out of the paper, so there is no remaining water on the paper\n11.Next, place the cotton balls all around the paper\n12.Again, sprinkle cocoa powder around the paper and spray the bottle of water on the paper\n13.Observe how the cotton balls soak up the cocoa powder water mixture, preventing the water from getting contaminated'
            var Assessment = '1.What are some absorbent materials you can find around your house?\nCotton balls, towels, paper towels, tissues\n\n2.What are some absorbent materials found in nature?\nMoss, grass, foliage\n\n3.What are things we don’t want to find in our water supply?\nGarbage, waste, pollutants\n\n4.Why is it important to keep our water supply clean?\nTo protect wildlife, and to keep the water we use and drink safe so we do not get sick'
            
            if(grade == 9) {
                pdfPath = ('http://47.89.252.2:5000/DIY_Watershed_9-12.docx.pdf')
                Assessment = '1.What are some absorbent materials you can find around your house?\nCotton balls, towels, paper towels, tissues\n\n2.What are some absorbent materials found in nature?\nMoss, grass, foliage\n\n3.What are things we don’t want to find in our water supply?\nGarbage, waste, pollutants\n\n4.Why is it important to keep our water supply clean?\nTo protect wildlife, and to keep the water we use and drink safe so we do not get sick\n\n5.What can damage a watershed?\nPollution, climate change, invasive species, overuse of water, invasive species\n\n6.What happens when a watershed gets too much rain?\nThe bodies of water water level rises, affecting surrounding communities if the water level rises too high\n\n7.What happens when a watershed gets too little rain?\nThe bodies of water water level rises, threatening the drinking supply\n\n'
            }

            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade, videoPath: videoPath, pdfPath: pdfPath, Experiment_Duration: Experiment_Duration, Expectations, Objectives,Delivery,Procedures,Assessment },
            });
        }else if (activityName === "Water Pump")
        {
            var pdfPath = ('http://47.89.252.2:5000/Water_Pump_6-8.docx.pdf')
            var videoPath = '8SD8wTcanUE'
            var Experiment_Duration = 30
            var Expectations = "Construct a set of connected bottles, visualize water moving to equilibrium, and watch the water stop flowing when the water level is equal. Then answer questions showing understanding."
            var Objectives  = 'Demonstrate the concept of fluid pressure and how it causes the flow of fluid.' 
            var Delivery = '1.Two plastic bottles of the same size and shape\n2.A plastic tube or a straw\n3.Water\n4.Food coloring (optional, for visual effect)\n5.Tape or clay (optional, for securing the tube or straw in place)\n' 
            
            var Procedures = '1.Take two plastic bottles of the same size and shape and clean them thoroughly.\n2.Fill one of the bottles with water and add some food coloring if desired.\n3.Connect the two bottles by inserting a plastic tube or straw through the bottom of each bottle. The tube or straw should be long enough to connect the two bottles while still leaving some space for the water to flow through.\n4.Secure the tube or straw in place using tape or clay, making sure that it is watertight to prevent leaks.\n5.Place the bottles at different heights.\n6.Slowly pour water into the higher bottle and observe what happens. Water should flow through the tube or straw and into the lower bottle.\n7.Wait until the water flow stops, and then observe that the water level is now the same in both bottles.\n'
            
            var Assessment = '1.What is the purpose of the experiment?\n2.How does the pressure of water cause it to flow from the higher bottle to the lower bottle?\n3.What happens when the water levels in the two bottles are equal? Why does this happen?\n4.How does the diameter or length of the connecting tube affect the flow rate of water?\n5.What factors could influence the speed of the water flow between the bottles?\n6.How might the principles demonstrated in this experiment relate to real-world applications, such as water treatment or plumbing?'
            
            if(grade == 9) {
                pdfPath = ('http://47.89.252.2:5000/Water_Pump_9-12.docx.pdf')
                Assessment = '1.What is the purpose of the experiment?\n2.How does the pressure of water cause it to flow from the higher bottle to the lower bottle?\n3.What happens when the water levels in the two bottles are equal? Why does this happen?\n4.How does the diameter or length of the connecting tube affect the flow rate of water?\n5.What factors could influence the speed of the water flow between the bottles?\n6.How might the principles demonstrated in this experiment relate to real-world applications, such as water treatment or plumbing?\n7.Where could you find a water pump near you?\n8.Come up with a way you could expand on this experiment!'
            }

            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade, videoPath: videoPath, pdfPath: pdfPath, Experiment_Duration: Experiment_Duration, Expectations, Objectives,Delivery,Procedures,Assessment },
            });
            
        }else if (activityName === "Water Tower")
        {
            var pdfPath = ('http://47.89.252.2:5000/Water_Tower_6-8.docx.pdf')
            var videoPath = '8SD8wTcanUE'
            var Experiment_Duration = 30
            var Expectations = "1.Students will be able to understand and explain the concept of water pressure.\n2.Students will demonstrate the ability to accurately measure and record the distance that water sprays out of holes in the graduated cylinder.\n3.Students will be able to calculate the water pressure at different levels in the cylinder using the measurements they have taken.\n4.Students will work collaboratively and engage in scientific inquiry as they explore the concept of water pressure.\n5.Students will ask questions and make predictions about how changing the height of the water in the cylinder will affect the water pressure.\n6.Students will be able to apply the concept of water pressure to real-world situations, such as explaining how a water tower works or how water is distributed in a building.\n7.Students will have a better appreciation for the importance of accurate measurement and data recording in scientific experiments.\n"
            var Objectives  = 'To enable students to calculate the water pressure at different levels in the graduated cylinder by measuring the distance that water sprays out of holes at various heights. '  
            var Delivery = '1.Water Tower\n2.Water\n3.Tape (masking or duct tape)\n4.A ruler or measuring tape\n5.A pen or marker for labeling the holes in the cylinder\n6.Safety goggles or glasses (optional, but recommended)\n7.A towel or tray to catch water spills or drips'
            var Procedures = '1.Fill the water tower with water to a level that covers all of the holes along the side, and cover each hole with a piece of tape.\n2.Label each piece of tape with a number or letter so that each hole can be identified later.\n3.Choose a hole near the bottom of the cylinder and remove the tape.\n4.Use a ruler or measuring tape to measure the distance that the water sprays out of the hole.\n5.Record the measurement and label it with the corresponding number or letter for that hole.\n6.Repeat steps 3-5 for each hole at different heights along the cylinder, starting from the bottom and working your way up.\n7.Once all measurements have been taken, calculate the water pressure at each level using the measurements taken in step 5.\n8.Record your data in a table or chart, and use it to compare the water pressure at different levels in the cylinder.' 
            var Assessment = '1.What is water pressure, and how does it work?\n2.How does the height of the water affect the pressure exerted by the water?\n3.How did you measure the distance that water sprayed out of the holes in the cylinder?\n4.What patterns or trends did you observe in your data?\n5.How did you calculate the water pressure at each level in the cylinder?\n6.How might the results of this experiment be useful in real-world situations?\n7.What factors might affect the accuracy of your measurements or calculations?\n8.What questions or ideas do you have for further investigation?\n9.What did you learn about the importance of accurate measurement and data recording during this experiment?\n10.How did working collaboratively with your classmates help you to understand the concept of water pressure?\n'
            
            if(grade == 9) {
                pdfPath = ('http://47.89.252.2:5000/Water_Tower_9-12.docx.pdf')
                Assessment = '1.What is water pressure, and how does it work?\n2.How does the height of the water affect the pressure exerted by the water?\n3.How did you measure the distance that water sprayed out of the holes in the cylinder?\n4.What patterns or trends did you observe in your data?\n5.How did you calculate the water pressure at each level in the cylinder?\n6.How might the results of this experiment be useful in real-world situations?\n7.What factors might affect the accuracy of your measurements or calculations?\n8.What questions or ideas do you have for further investigation?\n9.What did you learn about the importance of accurate measurement and data recording during this experiment?\n10.How did working collaboratively with your classmates help you to understand the concept of water pressure?\n'
            }

            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade, videoPath: videoPath, pdfPath: pdfPath, Experiment_Duration: Experiment_Duration, Expectations, Objectives,Delivery,Procedures,Assessment },
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
