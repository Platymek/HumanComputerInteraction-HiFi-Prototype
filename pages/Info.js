import { Image, Text } from "react-native"
import Main from "./templates/Main"
import Container from "./templates/components/Container"
import BigButton from "./templates/components/BigButton"
import AddButton from "./templates/components/AddButton"

/*

    - Info Page -

    props:
    - colors: page's colors
    - birds: list of birds
    - infoIndex: index of bird on page
    - log: log list
    - setLog: set log list function

*/

export default function Info({ navigation, route }) {

    var { colors, birds, infoIndex, log, setLog } = route.params

    return (

        <Main

            colors={colors}
            navigation={navigation}
        >
            <Container

                colors={colors}
            >
                <AddButton

                    colors={colors}
                    birds={birds}
                    log={log}
                    setLog={setLog}
                    birdIndex={infoIndex}
                    navigation={navigation}
                    full={true}
                />

                <Image

                    style={{

                        height: 200,
                        width: 200,
                        borderRadius: 50,

                        marginTop: 32,
                    }}

                    source={birds[infoIndex].asset}
                />

                <Text style={{

                    fontWeight:'bold',
                    fontSize: 32,
                    color: colors[2],

                    marginTop: 32,
                    marginBottom: 8,
                }}>
                    {birds[infoIndex].name}

                </Text>

                <Text style={{

                    fontSize: 18,
                    color: colors[2],

                    margin: 8,
                    marginBottom: 32,
                }}>
                    {birds[infoIndex].description}

                </Text>

            </Container>

        </Main>
    )
}
