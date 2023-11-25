import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './Colors'

import Account from './pages/templates/Account';
import TextBox from './pages/templates/components/TextBox';
import BigButton from './pages/templates/components/BigButton';
import HyperLinkText from './pages/templates/components/HyperLinkText';

function TestHarness({ navigation, route }) {

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
                hyperPage={"TestHarness2"}

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

function TestHarness2({ navigation, route }) {

    const { colors } = route.params

    return (

        <View
            style={{

                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <Text>I'm the new Page!</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {

    return (

        <NavigationContainer>

            <Stack.Navigator

                initialRouteName="TestHarness"
                screenOptions={{
                    headerShown: true
                }}
            >

                <Stack.Screen

                    name="TestHarness"
                    component={TestHarness}

                    options={{ headerShown:false }}

                    initialParams={{

                        colors: colors
                    }}
                />

                <Stack.Screen

                    name="TestHarness2"
                    component={TestHarness2}

                    initialParams={{

                        colors: colors
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
