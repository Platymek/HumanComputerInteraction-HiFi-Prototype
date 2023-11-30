import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HelpButton from './templates/components/HelpButton';
import GuideButton from './templates/components/GuideButton';
import BigButton from './templates/components/BigButton';


export default function Dashboard({ navigation, route }) {

    const { colors } = route.params;
    
    return (
        <View
            style={{

                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16
            }}
        >
            {/* Title and start session section */}
            <View style={[

                { backgroundColor: colors[1], },
                styles.container,
            ]}>

                <Text style={{

                    fontSize: 18,
                    color: colors[2],
                    textAlign: 'center',
                    margin: 16,
                }}>
                    <Text style={{ fontWeight: 'bold' }}> Your 1 hour session timer will start when the button is pressed. </Text>

                    Make sure to check the guides
                    below before starting your session

                </Text>

                <BigButton

                    colors={colors}
                    title={"Start Session"}
                    alt={true}

                    onPress={() => {

                        navigation.navigate("Home")
                    }}
                />
            </View>

            {/* Bottom buttons */}

            {/* Guide button*/}
            <View style={[

                styles.container,
                {
                    backgroundColor: colors[1],
                },
            ]}>
                <View style={[

                    { backgroundColor: colors[1], },
                    styles.buttonContainer,
                ]}>
                    <Text style={[

                        { color: colors[2] },
                        styles.text
                    ]}>
                        <Text style={{ fontWeight: 'bold' }}>Want to learn your birds? </Text>
                        Press this button to get learning!
                    </Text>

                    <GuideButton

                        colors={colors}
                        navigation={navigation}
                    />
                </View>

                {/* Help button */}
                <View style={[

                    { backgroundColor: colors[1], },
                    styles.buttonContainer,
                ]}>

                    <Text style={[

                        { color: colors[2] },
                        styles.text
                    ]}>
                        <Text style={{ fontWeight: 'bold' }}>Don't know how the count works? </Text>
                        Press this button to find out!
                    </Text>

                    <HelpButton

                        colors={colors}
                        navigation={navigation}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    text: {

        fontSize: 18,
        margin: 8,
        flex: 1,
        maxWidth: 120,
    },

    container: {

        width: 340,
        borderRadius: 20,
        padding: 8,

        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
        marginTop: 12,
    },

    buttonContainer: {

        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});