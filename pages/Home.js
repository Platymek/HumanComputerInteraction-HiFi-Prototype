import { View } from "react-native";
import Main from "./templates/Main";
import Container from "./templates/components/Container";
import GuideButton from "./templates/components/GuideButton";
import HelpButton from "./templates/components/HelpButton";
import { Text } from "react-native";
import ScrollingBox from "./templates/components/ScrollBox";
import IndividualLog from "./templates/components/IndividualLog";
import BigButton from "./templates/components/BigButton";
import { useState } from "react";

export default function Home({ navigation, route }) {

    var { colors, log, birds, unsureList, setUnsureList } = route.params
    
    function Birds(birds, log, colors) {

        var birdComponents = [

            <Container

                colors={colors}
                key={'birdsContainer'}

                style={{

                    marginBottom: 16,
                    borderRadius: 20,
                    padding:4,
                }}
            >
                <BigButton

                    colors={colors}
                    lite={true}
                    title={"Add new bird to log +"}
                    smallText={true}

                    onPress={() => navigation.navigate("FullList", { log: log, colors: colors }) }
                />
            </Container>
        ]

        if (Object.keys(log).length > 0) {

            for (var i = 0; i < Object.keys(log).length; i++) {

                birdComponents.push(

                    <IndividualLog

                        colors={colors}
                        birds={birds}
                        navigation={navigation}
                        log={log}
                        birdIndex={Object.keys(log)[i]}
                        key={'logBird' + i}
                        RemoveBird={RemoveBird}
                    />
                )
            }
        }

        return birdComponents;
    }

    console.log(log)

    var birdList = Birds(birds, log, colors);

    function RemoveBird(index) {

        var intIndex = parseInt(index);

        delete log[intIndex];

        console.log(log);

        navigation.navigate("Home", { log: log, colors: colors })
    }

    return (

        <Main

            colors={colors}
            navigation={navigation}
        >
            <View style={{

                width: '100%',
                alignItems: 'center',
            }}>
                <Container

                    colors={colors}

                    style={{

                        minHeight: 200,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        padding: 10,
                        paddingRight: 16,
                        borderRadius: 25,

                        maxWidth: 350,
                        alignContent: 'center',
                    }}
                >
                    <GuideButton

                        colors={colors}
                        navigation={navigation}
                    />

                    <View style={{ padding: 8, }} />

                    <HelpButton

                        colors={colors}
                        navigation={navigation}
                    />

                </Container>
            </View>

            <Container

                colors={colors}

                style={{

                    marginTop: 16,
                    alignSelf:'center',
                }}
            >
                <Text style={{

                    textAlign: 'center',
                    color: colors[2],
                    fontSize: 18,
                    marginBottom: 8,
                }}>
                    <Text style={{ fontWeight: 'bold' }}>What birds have you seen?{'\n'}</Text>
                    Log them below.

                </Text>

                <Container

                    colors={colors}
                    grey={true}
                    maxHeight={325}

                    style={{

                        padding: 16,
                        borderRadius: 30,
                        paddingBottom: 16,
                    }}
                >
                    {birdList}

                </Container>

            </Container>

        </Main>
    )
}

/*


                <Text style={{

                    marginTop: 8,
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: colors[2],
                    alignSelf: 'center'
                }}>
                    Scroll Down for More

                </Text>
*/