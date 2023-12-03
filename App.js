import { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import lightColors from './Colors'
import birds from './Birds'

import BigButton from './pages/templates/components/BigButton';
import Header from './pages/templates/components/Header'; 

import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Help from './pages/Help';
import Dashboard from './pages/Dashboard';
import ScrollingBox from './pages/templates/components/ScrollBox'
import Container from './pages/templates/components/Container';
import AddButton from './pages/templates/components/AddButton';

function TestHarness({ 

    navigation, 
    route,
}) {

    const { colors, birds, log, setLog } = route.params

    return (
        
        <View
            style={{

                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
            }}
        >
            <Container
            
                colors={colors}

                style={{

                    maxHeight:200,
                    maxWidth:350,
                }}
            >

                <AddButton 
                
                    colors={colors}

                    birds={birds}
                    birdIndex={2}

                    log={log}
                    setLog={setLog}

                    navigation={navigation}

                    full={false}
                />

                <AddButton 
                
                    colors={colors}

                    birds={birds}
                    birdIndex={0}

                    log={log}
                    setLog={setLog}

                    navigation={navigation}

                    full={true}
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
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {

    // check README for how birds are logged
    const [log, setLog] = useState({

        [0]: 4,
    });

    // current list of colours (defaults to lightColors from Colors.js)
    const [colors, setColors] = useState(lightColors);

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
                        birds: birds,
                        log: log,
                        setLog: setLog,
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
