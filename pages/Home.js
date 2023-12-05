import { View } from "react-native";
import Main from "./templates/Main";
import Container from "./templates/components/Container";
import GuideButton from "./templates/components/GuideButton";
import HelpButton from "./templates/components/HelpButton";
import { Text } from "react-native";
import ScrollingBox from "./templates/components/ScrollBox";
import IndividualLog from "./templates/components/IndividualLog";

export default function Home({ navigation, route }) {

    var { colors, log, setLog, birds } = route.params

    function Birds(birds, colors) {

        var birdComponents = []

        for (var i = 0; i < birds.length; i++) {

            birdComponents.push(

                <IndividualLog

                    colors={colors}
                    birds={birds}
                    navigation={navigation}
                    log={log}
                    setLog={setLog}
                    birdIndex={i}
                    key={'bird' + i}
                />
            )
        }

        return birdComponents;
    }

    return (

        <Main

            colors={colors}
            navigation={navigation}
        >
            <Container

                colors={colors}

                style={{

                    height: 200,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    padding: 10,
                    paddingRight: 16,
                    borderRadius: 25,
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
                }}>
                    <Text style={{ fontWeight: 'bold' }}>What birds have you seen?{'\n'}</Text>
                    Log them below.

                </Text>

                <ScrollingBox

                    colors={colors}
                    grey={true}
                    maxHeight={325}
                >
                    {Birds(birds, colors)}

                </ScrollingBox>

                <Text style={{

                    marginTop: 8,
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: colors[2],
                    alignSelf: 'center'
                }}>

                    Scroll Down for More

                </Text>

            </Container>

        </Main>
    )
}
