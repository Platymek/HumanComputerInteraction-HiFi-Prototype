import { Text, View } from "react-native";
import Main from "./templates/Main";
import BigButton from "./templates/components/BigButton";
import Container from "./templates/components/Container";
import SearchBirds from "./templates/components/SearchBirds";

export default function Results({

    navigation,
    route,
}) {

    const { colors, birds, log, setLog } = route.params

    return (

        <Main

            colors={colors}
            navigation={navigation}
            admin={true}
        >
            <Container

                colors={colors}

                style={{

                    marginBottom: 16,
                    alignContent: 'center',
                }}
            >
                <Text style={{

                    fontSize: 18,
                    color: colors[2],
                    margin: 2,
                    marginTop: 4,
                    marginBottom: 8,
                }}>
                    <Text style={{ fontWeight: 'bold' }}>Want to see all of the data? </Text>
                    Press to download for use with any spreadsheet software of your choice (e.g. Excel).

                </Text>

                <BigButton

                    colors={colors}
                    title={"Download .CSV"}
                />

            </Container>

            <Container

                colors={colors}
            >
                <SearchBirds

                    colors={colors}
                    birds={birds}
                    results={true}
                    maxHeight={325}
                />
            </Container>

        </Main>
    );
}
