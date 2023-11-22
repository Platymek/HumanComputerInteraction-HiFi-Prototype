import { Pressable } from 'react-native';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

/*
    - BigButton Component -

    props:
    - colors: color palette of page
    - title: text in big button
    - (optional) source: source of image
*/

export default function BigButton(props) {

    function RenderImage(props) {

        if (props.source != undefined) {

            return (

                <View>
                    <Image

                        source={props.source}

                        style={{

                            width: 110,
                            height: 110,
                            marginTop: 12,
                        }}
                    />
                </View>
            )
        }
    }

    return (

        <View style={{

            padding: 4,
        }}>

            <Pressable

                onPress={props.onPress}
                unstable_pressDelay={1}

                color={props.colors[3]}

                style={({ pressed }) => [{

                    backgroundColor: pressed
                        ? props.colors[2]
                        : props.colors[3],

                    padding: 8,
                    borderWidth: 3,
                    borderColor: props.colors[3],
                    borderRadius: 4,
                    alignItems: 'center'
                }]}
            >
                <Text

                    selectable={false}

                    style={{

                        color: props.colors[1],
                        fontSize: 28,
                    }}
                >
                    {props.title}
                </Text>

                <RenderImage
                    source={props.source}
                />
            </Pressable>
        </View>
    );
}
