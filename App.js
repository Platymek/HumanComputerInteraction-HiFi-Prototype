import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './Colors'
import birds from './Birds'

import BigButton from './pages/templates/components/BigButton';
import Header from './pages/templates/components/Header'; 

import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Help from './pages/Help';
import Dashboard from './pages/Dashboard';
import Container from './pages/templates/components/Container';

function TestHarness({ navigation, route }) {

    const { colors } = route.params

    return (

        <View 
            style={{

                alignItems: 'center',
                justifyContent: 'center',
                flex:1,
            }}
        >
            <Container colors={colors}>
                <BigButton

                    colors={colors}

                    title={"Hello"}

                    onPress={() => navigation.navigate("TestHarness2")}
                />
                <BigButton

                    colors={colors}

                    title={"Hello"}
                    alt={true}
                />
                <BigButton

                    colors={colors}

                    title={"Hello"}
                    lite={true}
                />
                <BigButton

                    colors={colors}

                    title={"Hello"}
                    alt={true}
                    lite={true}
                />
            </Container>
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

                initialRouteName="SignUp"
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

                    name="Help"
                    component={Help}

                    options={{ headerShown: false }}

                    initialParams={{

                        colors: colors
                    }}
                />

                <Stack.Screen

                    name="Dashboard"
                    component={Dashboard}

                    options={{ headerShown: false }}

                    initialParams={{

                        colors: colors
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
