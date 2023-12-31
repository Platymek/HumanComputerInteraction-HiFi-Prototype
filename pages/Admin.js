import * as React from 'react';
import { View, Text } from 'react-native';

import Account from './templates/Account';
import TextBox from './templates/components/TextBox';

export default function Admin({ navigation, route }) {

    const { colors } = route.params

    return (

        <View
            style={{

                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors[7], 
            }}>

            <Account

                colors={colors}

                buttonTitle={"Log In"}
                navigation={navigation}
                alt={true}

                hyperText={"Not an admin? "}
                linkText={"Sign Up as user."}
                hyperPage={"SignUp"}

                onButtonPress={() => {

                    navigation.navigate("Results")
                }}
            >
                <Text style={{

                    padding: 4,
                    fontSize: 18,

                    color: colors[6],
                }}>
                    <Text style={{ fontWeight: "bold" }}>Enter your details to see the results page early. </Text>
                    <Text>The page shows the current leaderboard for birds spotted and allows you to download the data in the .csv file format to use on any spreadsheet program of your choosing (e.g. Excel)</Text>
                </Text>

                <View style={{

                    padding: 4,
                }} />

                <TextBox

                    colors={colors}
                    title={"Unique ID"}
                    placeholder={"Enter your unique ID..."}
                    alt={true}
                />

                <TextBox

                    colors={colors}
                    title={"Password"}
                    placeholder={"Enter your password..."}
                    alt={true}
                />

            </Account>
        </View>
    );
}
