import { Text, View } from "react-native";
import Main from "./templates/Main";
import BigButton from "./templates/components/BigButton";
import Container from "./templates/components/Container";
import { Image } from "react-native";
import AddButton from "./templates/components/AddButton";
import SeeInfo from "./templates/components/SeeInfo";
import { useState } from "react";
import Questions from "../Questions";

export default function Questionnaire({

    navigation,
    route,
}) {

    const { colors, birds, log } = route.params

    const [previousNumber, setPreviousNumber] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);

    function SeeUndo(previousNumber, questionNumber) {

        if (previousNumber != questionNumber) {

            return (

                <BigButton

                    colors={colors}
                    title={"< Undo Question"}
                    lite={true}
                    smallText={true}
                    compact={true}

                    onPress={() => {

                        setQuestionNumber(previousNumber)
                    }}
                />
            )
        }
    }

    return (

        <Main

            colors={colors}
            navigation={navigation}
        >
            <Container

                colors={colors}

                style={{

                    marginBottom: 16,
                    paddingTop: 0,
                    paddingBottom: 0,
                    maxWidth: 300,
                    borderRadius: 20
                }}
            >
                <BigButton

                    colors={colors}
                    title={"See All Birds"}
                    source={require("../assets/hamburger.png")}
                    small={true}
                    lite={true}
                    compact={true}
                    margin={0}
                    onPress={() => navigation.navigate("FullList", { log: log })}
                />
            </Container>

            <Container

                colors={colors}
            >

                <Text style={{

                    fontSize: 18,
                    color: colors[2],
                }}>

                    <Text style={{ fontWeight: 'bold' }}>Answer the questions to identify your bird. </Text>
                    Press 'Add' to add it to your log or 'Info' to see info about the bird.

                </Text>

                <Container

                    colors={colors}
                    grey={true}

                    style={{

                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems:'center',
                        borderRadius: 25,
                        marginTop: 16,
                    }}
                >
                    <View>
                        <Text style={{

                            fontSize: 22,
                            color: colors[2],
                            paddingLeft: 8,
                        }}>

                            Current Guess:{"\n"}
                            <Text style={{ fontWeight: 'bold' }}>{birds[0].name}</Text>

                        </Text>
                    </View>

                    <Image

                        style={{

                            width: 100,
                            height: 100,
                        }}

                        source={birds[questionNumber].asset}
                    />

                    <View style={{

                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        width: "100%",
                    }}>
                        <View

                            style={{

                                width: "45%",
                            }}
                        >
                            <SeeInfo

                                colors={colors}
                                navigation={navigation}
                                birdIndex={questionNumber}
                            />
                        </View>

                        <View

                            style={{

                                width: "50%",
                            }}
                        >
                            <AddButton

                                colors={colors}
                                birds={birds}
                                log={log}
                                birdIndex={questionNumber}
                                navigation={navigation}
                            />
                        </View>

                    </View>

                </Container>

                <View style={{

                    alignSelf: "flex-start",
                    height: 60,
                }}>
                    {SeeUndo(previousNumber, questionNumber)}

                </View>

                <Text style={{

                    fontWeight: 'bold',
                    fontSize: 32,
                    paddingLeft: 8,
                    color: colors[2],
                }}>
                    {Questions[questionNumber].question}

                </Text>


                <View style={{

                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: 22,
                    width: "100%",
                    paddingLeft: 16,
                    paddingRight: 16,
                }}>

                    <View style={{ width: "40%" }}>

                        <BigButton

                            colors={colors}
                            title={"no"}
                            alt={true}
                            lite={true}

                            onPress={() => {

                                setPreviousNumber(questionNumber)
                                setQuestionNumber(Questions[questionNumber].no)
                            }}
                        />
                    </View>

                    <View style={{

                        width: "1%",
                        height: 50,
                        alignSelf: 'center',
                        backgroundColor: colors[7],
                    }}/>

                    <View style={{ width: "40%" }}>

                        <BigButton

                            colors={colors}
                            title={"yes"}
                            lite={true}

                            onPress={() => {

                                setPreviousNumber(questionNumber)
                                setQuestionNumber(Questions[questionNumber].yes)
                            }}
                        />
                    </View>
                </View>

            </Container>

        </Main>
    );
}
