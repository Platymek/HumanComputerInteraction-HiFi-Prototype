import Main from "./templates/Main";
import Container from "./templates/components/Container";
import SearchBirds from "./templates/components/SearchBirds";

export default function FullList({

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
                <SearchBirds

                    colors={colors}
                    birds={birds}
                    results={false}
                    navigation={navigation}
                    log={log}
                    setLog={setLog}
                    maxHeight={500}
                />
            </Container>

        </Main>
    );
}
