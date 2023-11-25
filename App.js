import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './Colors'

import BigButton from './pages/templates/components/BigButton';

import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Help from './pages/Help';

function TestHarness({ navigation, route }) {

    const { colors } = route.params

    return (

        <View
            style={{

                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <BigButton

                colors={colors}

                title={"Open Sign Up page"}

                onPress={() => {

                    navigation.navigate("SignUp")
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
                <Stack.Screen

                    name="Help"
                    component={Help}

                    options={{ headerShown: false }}

                    initialParams={{

                        colors: colors
                    }}
                />

                <Stack.Screen

                    name="SignUp"
                    component={SignUp}

                    options={{ headerShown: false }}

                    initialParams={{

                        colors: colors
                    }}
                />

                <Stack.Screen

                    name="Admin"
                    component={Admin}

                    options={{ headerShown: false }}

                    initialParams={{

                        colors: colors
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
