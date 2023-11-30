import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './Colors'

import BigButton from './pages/templates/components/BigButton';
import Header from './pages/templates/components/Header'; 

import SignUp from './pages/SignUp';
import Admin from './pages/Admin';

function TestHarness({ navigation, route }) {

    const { colors } = route.params

    return (

        <View
            style={{

                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
            }}>

            <Header

                colors={colors}
                navigation={navigation}
            />

            <View
                style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}
            >
                <Text
                    style={{

                        fontSize: 18,
                    }}
                >
                    May I draw your attention to the header please...?
                </Text>

                <BigButton

                    colors={colors}

                    title={"Open Sign Up page"}

                    onPress={() => {

                        navigation.navigate("TestHarness2")
                    }}
                />
            </View>
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
            }}
        >
            <Header

                colors={colors}
                navigation={navigation}
            />

            <View
                style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}
            >
                <Text
                    style={{

                        fontSize: 18,
                    }}
                >
                    Try pressing back!
                </Text>
            </View>
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

                    headerShown: false,
                }}
            >

                <Stack.Screen

                    name="TestHarness"
                    component={TestHarness}

                    initialParams={{

                        colors: colors,
                    }}
                />

                <Stack.Screen

                    name="TestHarness2"
                    component={TestHarness2}

                    initialParams={{

                        colors: colors,
                    }}
                />

                <Stack.Screen

                    name="SignUp"
                    component={SignUp}

                    initialParams={{

                        colors: colors
                    }}
                />

                <Stack.Screen

                    name="Admin"
                    component={Admin}

                    initialParams={{

                        colors: colors
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
