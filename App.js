import { useEffect, useState } from 'react';
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

    const { colors, setColors, getColors, toggleDarkMode, darkMode, birds, log, setLog, handleLightMode, handleDarkMode } = route.params

    const [toggled, setToggled] = useState(false);
    const [pageColors, setPageColors] = useState(colors);

    return (
        
        <Main

            colors={pageColors}
            navigation={navigation}
            setPageColors={setPageColors}
        >
            <IndividualLog

                colors={pageColors}
                birds={birds}
                navigation={navigation}
                log={log}
                birdIndex={0}
            />

            <Container

                colors={pageColors}
            >
                <View style={{

                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{

                        color: pageColors[2],
                        fontSize: 22,
                    }}>
                        Dark Mode?

                    </Text>

                    <NewToggle

                        colors={pageColors}
                        toggled={toggled}

                        onToggled={() => {

                            setToggled(!toggled);

                            if (toggled) {

                                setPageColors(lightColors)
                            }
                            else {

                                setPageColors(darkColors)
                            }
                        }}
                    />
                </View>
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
    const [colors, setColors] = useState(lightColors);

    // index of bird on info page
    const [infoIndex, setInfoIndex] = useState(0);

    // index of bird on info page
    const [unsureList, setUnsureList] = useState([0]);

    const [darkMode, setDarkMode] = useState(false);

    const [a, setA] = useState(false);

    const toggleDarkMode = (toggled) => {

        setDarkMode(!darkMode)
        console.log(toggled);

        if (toggled) {

            setColors(darkColors)
            console.log(colors)
        }
        else {

            setColors(lightColors)
            console.log(colors)
        }
    }

    const getColors = () => {

        return colors
    }

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
                        setColors: setColors,
                        getColors: getColors,
                        darkMode: darkMode,
                        toggleDarkMode: toggleDarkMode,
                        birds: birds,
                        log: log,
                        setLog: setLog,
                        setInfoIndex: setInfoIndex,

                        handleLightMode: () => {

                            setA(false)
                            console.log(a)
                        },

                        handleDarkMode: () => {

                            setA(true)
                            console.log(a)
                        },
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
