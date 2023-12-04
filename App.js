import { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import lightColors from './Colors'
import birds from './Birds'

import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Help from './pages/Help';
import Dashboard from './pages/Dashboard';
import Container from './pages/templates/components/Container';
import Main from './pages/templates/Main';
import Info from './pages/Info';
import IndividualSearch from './pages/templates/components/IndividualSearch';

function TestHarness({ 

    navigation, 
    route,
}) {

    const { colors, birds, log, setLog } = route.params

    return (
        
        <Main

            colors={colors}
            navigation={navigation}
        >
            <Container

                colors={colors}
            >

                <Container

                    colors={colors}
                    grey={true}
                >

                    <IndividualSearch

                        colors={colors}

                        birds={birds}
                        navigation={navigation}
                        log={log}
                        setLog={setLog}
                        birdIndex={0}
                    />

                    <IndividualSearch

                        colors={colors}

                        birds={birds}
                        navigation={navigation}
                        log={log}
                        setLog={setLog}
                        birdIndex={1}
                    />

                    <IndividualSearch

                        colors={colors}

                        birds={birds}
                        navigation={navigation}
                        log={log}
                        setLog={setLog}
                        birdIndex={2}
                    />

                </Container>
            </Container>
            
        </Main>
    );
}

function TestHarness2({ navigation, route }) {

    const { colors } = route.params

    // `navigation` const is passed to the screen component or from useNavigation()
    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2]; // -2 because -1 is the current route

    return (

        <Main

            colors={colors}
            navigation={navigation}
        >
            <Container colors={colors}>

                <Text>{prevRoute.name}</Text>

            </Container>

        </Main>
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

    // index of bird on info page
    const [infoIndex, setInfoIndex] = useState(0);

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
                        setInfoIndex: setInfoIndex,
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

                <Stack.Screen

                    name="Info"
                    component={Info}

                    initialParams={{

                        colors: colors,
                        birds: birds,
                        infoIndex: infoIndex,
                        log: log,
                        setLog: setLog,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
