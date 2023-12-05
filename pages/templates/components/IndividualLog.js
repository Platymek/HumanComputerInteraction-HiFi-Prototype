import { Text, View, TextInput  } from 'react-native';
import { useState } from "react";
import BirdContainer from './BirdContainer'
import BigButton from "./BigButton";
import Container from "./Container";

export default function IndividualLog(props) {

    const [count, setCount] = useState(

        '' + (props.log[props.birdIndex])
    );

    return (

        <BirdContainer 
        
            colors={props.colors}
            bird={props.birds[props.birdIndex]}
        >

            <View style={{

                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
            }}>
            </View>

            <View style={{

                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: -8,
            }}>

                <BigButton

                    colors={props.colors}
                    title={"-"}
                    lite={true}
                    compact={true}
                    margin={0}

                    onPress={() => {

                        var newInt = parseInt(count);
                        newInt--;

                        if (newInt < 1) {

                            props.RemoveBird(props.birdIndex)
                        }

                        if (count == "") {

                            setCount("1");
                        }
                        else {

                            setCount('' + newInt);
                        }

                        var newLog = props.log;

                        newLog[props.birdIndex]
                            = parseInt(count) - 1

                        props.setLog(newLog)
                    }}
                />

                <Container

                    colors={props.colors}
                    grey={true}
                    style={{

                        padding: 0,
                        maxWidth: 50,
                        justifyContent: 'center',
                        borderRadius: 20,
                    }}
                >
                    <TextInput

                        style={{

                            width: '100%',
                            color: props.colors[3],
                            fontSize: 24,
                            textAlign: 'center',
                        }}

                        value={count}
                        inputMode={'numeric'}

                        onChangeText={(text) => {

                            if (!isNaN(text)) {

                                setCount(text);

                                var newLog = props.log;
                                newLog[props.birdIndex]
                                    = parseInt(count)

                                props.setLog(newLog)
                            }
                        }}
                    />
                </Container>

                <BigButton

                    colors={props.colors}
                    title={"+"}
                    lite={true}
                    compact={true}
                    margin={0}

                    onPress={() => {

                        var newInt = parseInt(count);
                        newInt++;

                        if (count == "") {

                            setCount("1");
                        }
                        else {
                            setCount('' + newInt);
                        }

                        var newLog = props.log;
                        newLog[props.birdIndex]
                            = parseInt(count)

                        props.setLog(newLog)
                    }}
                />
            </View>

        </BirdContainer>
    )
}

/*

    <Text style={{

        color: props.colors[2],
        fontSize: 18
    }}
    >
        Seen:

    </Text>
*/
