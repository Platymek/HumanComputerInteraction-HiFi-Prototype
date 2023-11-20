import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './Colors'
import TextBox from './pages/templates/components/TextBox'

function TestHarness({ navigation, route }) {

    const { colors } = route.params

    return (

        <View
            style={{

                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <Text>TextBox:</Text>

            <TextBox

                title={"Email"}
                placeholder={"Example@gmail.com"}
                colors={colors}
            />

            <TextBox

                title={"Postcode"}
                placeholder={"QW1 2TY"}
                colors={colors}
            />

            <TextBox

                title={"Address"}
                placeholder={"House Number, Street, City.."}
                colors={colors}
            />
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

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
