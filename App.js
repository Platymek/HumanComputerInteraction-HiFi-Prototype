import { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import lightColors from './ColorsUpdated'
import darkColors from './ColorsDark'
import birds from './Birds'

import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Help from './pages/Help';
import Dashboard from './pages/Dashboard';
import Container from './pages/templates/components/Container';
import Main from './pages/templates/Main';
import Info from './pages/Info';
import FullList from './pages/FullList';
import Results from './pages/Results';
import Home from './pages/Home';
import Questionnaire from './pages/Questionnaire';

import NewToggle from './pages/templates/components/NewToggle';
import IndividualLog from './pages/templates/components/IndividualLog';

function TestHarness({ 

    navigation, 
    route,
}) {

    const { colors, birds, log, setLog } = route.params

    const [toggled, setToggled] = useState(false);

    return (
        
        <Main

            colors={colors}
            navigation={navigation}
        >
            <IndividualLog

                colors={colors}
                birds={birds}
                navigation={navigation}
                log={log}
                birdIndex={0}
            />

            <Container

                colors={colors}
            >
                <NewToggle

                    colors={colors}
                    toggled={toggled}

                    onToggled={() => {

                        setToggled(!toggled)
                    }}
                />
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
    const [log, setLog] = useState({});

    // current list of colours (defaults to lightColors from Colors.js)
    const [colors, setColors] = useState(darkColors);

    // index of bird on info page
    const [infoIndex, setInfoIndex] = useState(0);

    // index of bird on info page
    const [unsureList, setUnsureList] = useState([0]);

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

                <Stack.Screen

                    name="FullList"
                    component={FullList}

                    initialParams={{

                        colors: colors,
                        birds: birds,
                        infoIndex: infoIndex,
                        log: log,
                        setLog: setLog,
                    }}
                />

                <Stack.Screen

                    name="Results"
                    component={Results}

                    initialParams={{

                        colors: colors,
                        birds: birds,
                        infoIndex: infoIndex,
                        log: log,
                        setLog: setLog,
                    }}
                />

                <Stack.Screen

                    name="Home"
                    component={Home}

                    initialParams={{

                        colors: colors,
                        birds: birds,
                        infoIndex: infoIndex,
                        log: {},
                        unsureList: unsureList,
                        setUnsureList: setUnsureList,
                    }}
                />

                <Stack.Screen

                    name="Questionnaire"
                    component={Questionnaire}

                    initialParams={{

                        colors: colors,
                        birds: birds,
                        infoIndex: infoIndex,
                        log: {},
                        unsureList: unsureList,
                        setUnsureList: setUnsureList,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
