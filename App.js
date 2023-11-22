import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './Colors'
import HyperLinkText from './pages/templates/components/HyperLinkText'

function TestHarness({ navigation, route }) {

    const { colors } = route.params

    return (

        <View
            style={{

                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <Text>Big Buttons:</Text>

            <HyperLinkText

                colors={colors}
                text="New user? "
                link="Sign Up."

                onPress={() => {

                    navigation.navigate("TestHarness2")
                }}
            />

            <HyperLinkText

                colors={colors}
                text="Looking for the admin page? "
                link="Login as admin."
                alt={true}

                onPress={() => {

                    navigation.navigate("TestHarness2")
                }}
            />
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
