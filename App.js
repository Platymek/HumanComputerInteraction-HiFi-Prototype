import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './Colors'
import BigButton from './pages/templates/components/BigButton';
import TextBox from './pages/templates/components/TextBox';

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
                title={"Small Thumbnail!"}

                onPress={() => {

                    navigation.navigate("TestHarness2")
                }}

                source={require("./assets/icon.png")}
                alt={true}
                small={true}
            />

            <BigButton

                colors={colors}
                title={"Multi Line\nButton!?"}

                onPress={() => {

                    navigation.navigate("TestHarness2")
                }}

                source={require("./assets/icon.png")}
                alt={true}
                small={true}
            />

            <BigButton

                colors={colors}
                title="Bird Guide"
                source={require("./assets/icon.png")}

                onPress={() => {

                    navigation.navigate("TestHarness2")
                }}
            />

            <BigButton

                colors={colors}
                title="Hello"

                onPress={() => {

                    navigation.navigate("TestHarness2")
                }}
            />

            <TextBox

                colors={colors}
                title={"Funny Monkey Goopy"}
                placeholder={"Hello!"}
                alt={true}

                hintText={"Ooh... I'm a hint!"}
            />

            <TextBox

                colors={colors}
                title={"Funny Monkey Goopy"}
                placeholder={"Hello!"}
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
