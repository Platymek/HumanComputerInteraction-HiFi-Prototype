import { Text, View, TextInput  } from 'react-native';
import { useState } from "react";
import BirdContainer from './BirdContainer'
import BigButton from "./BigButton";
import Container from "./Container";
import NewToggle from './NewToggle';

export default function IndividualLog(props) {

    const [count, setCount] = useState(

        '' + (props.log[props.birdIndex])
    );

    const [toggled, setToggled] = useState(false);

    return (

        <BirdContainer 
        
            colors={props.colors}
            bird={props.birds[props.birdIndex]}
        >
            <View style={{

                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                width: '100%',

                marginLeft: -8,
            }}>

                <View style={{

                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
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

                            props.log[props.birdIndex]
                                = parseInt(count) - 1
                        }}
                    />

                    <Container

                        colors={props.colors}
                        grey={true}
                        style={{

                            padding: 0,
                            width: 50,
                            justifyContent: 'center',
                            borderRadius: 20,
                            height: 50,
                        }}
                    >
                        <TextInput

                            style={{

                                color: props.colors[2],
                                fontSize: 24,
                                textAlign: 'center',
                                maxWidth: 50,
                                fontWeight: 'bold'
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
                        margin={-2}

                        onPress={() => {

                            var newInt = parseInt(count);
                            newInt++;

                            if (count == "") {

                                setCount("1");
                            }
                            else {
                                setCount('' + newInt);
                            }

                            props.log[props.birdIndex]
                                = parseInt(count);
                        }}
                    />

                </View>

                <View style={{

                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                }}>

                    <Text style={{

                        fontSize: 18,
                        color: props.colors[2],
                        paddingRight: 8,
                        fontWeight: 'bold',
                    }}>
                        Unsure?

                    </Text>

                    <NewToggle

                        colors={props.colors}
                        toggled={toggled}

                        onToggled={() => {

                            setToggled(!toggled)
                        }}
                    />

                </View>
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
