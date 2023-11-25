import * as React from 'react';
import { View, Text } from 'react-native';

import Account from './templates/Account';
import TextBox from './templates/components/TextBox';

export default function SignUp({ navigation, route }) {

    const { colors } = route.params

    return (

        <View
            style={{

                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <Account

                colors={colors}

                buttonTitle={"Sign Up"}
                navigation={navigation}
                alt={false}

                hyperText={"Looking for the admin page?"}
                linkText={"Login as admin."}
                hyperPage={"Admin"}

                onButtonPress={() => {

                    navigation.navigate("TestHarness2")
                }}
            >
                <Text style={{

                    padding: 4,
                    fontSize: 18,

                    color: colors[2],
                }}>
                    <Text style={{ fontWeight: "bold" }}>Enter your details to sign up for the Big Garden Birdwatch! </Text>
                    <Text>Entering your details does not start your 1 hour session.</Text>
                </Text>

                <View style={{

                    padding: 4,
                }} />

                <TextBox

                    colors={colors}
                    title={"Email"}
                    placeholder={"example@mail.com"}
                    alt={false}
                />

                <TextBox

                    colors={colors}
                    title={"Postcode"}
                    placeholder={"AB1 2CD"}
                    alt={false}
                />

                <TextBox

                    colors={colors}
                    title={"Address"}
                    placeholder={"House Name, Street, City"}
                    hintText={"Only one session can be started for every household"}
                    alt={false}
                />

            </Account>
        </View>
    );
}
