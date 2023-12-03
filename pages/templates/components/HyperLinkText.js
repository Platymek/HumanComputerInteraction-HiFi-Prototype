import { Pressable } from 'react-native';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

/*
    - HyperLinkText Component -

    props:
    - colors: color palette of page
    - text: text in big button
    - link: hyperlink text
    - (optional) alt: boolean, colour as red instead of green
*/

export default function HyperLinkText(props) {

    return (

        <View style={{

            padding: 4,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
        }}>
            <Text

                style={{

                    color: props.colors[2],
                    fontWeight: 'bold',
                    fontSize: 16,
                }}
            >
                {props.text}
            </Text>

            <Pressable

                onPress={props.onPress}
                unstable_pressDelay={1}
                hitSlop={8}

                style={({ pressed }) => [{

                    color: props.colors[0],
                    borderRadius: 4,
                    alignItems: 'center',
                }]}
            >
                <Text

                    style={{

                        fontSize: 16,
                        fontWeight: 'bold',

                        color: props.alt == true
                            ? props.colors[5]
                            : props.colors[3],
                    }}
                >
                    {props.link}
                </Text>
            </Pressable>
        </View>
    );
}
