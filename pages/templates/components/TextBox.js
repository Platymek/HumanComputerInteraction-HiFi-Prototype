import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import HintButton from './HintButton';

/*
    - Textbox Component -

    props:
    - colors: color palette of page
    - title: text above text box
    - placeholder: placeholder text
    - (optional) alt: boolean, colour as red instead of green
    - (optional) hintText: text which will appear in the hint modal
*/

export default function TextBox(props) {

    function RenderHint(props) {

        if (props.text != undefined) {

            return (

                <View>

                    <HintButton

                        colors={props.colors}
                        text={props.text}
                        alt={props.alt}
                    />
                </View>
            )
        }
    }

    return (

        <View style={{

            padding: 12,
            width: '100%',
        }}>
            <View style={{

                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>

                <Text style={{

                    fontSize: 16,
                    fontWeight: 'bold',

                    paddingLeft: 4,
                    paddingBottom: 4,
                    paddingRight: 4,

                    color: (props.alt == true
                        ? props.colors[6]
                        : props.colors[2]),
                }}>

                    {props.title}
                </Text>

                <RenderHint

                    colors={props.colors}
                    alt={props.alt}
                    text={props.hintText}
                />
            </View>

            <TextInput

                placeholder={props.placeholder}
                placeholderTextColor={props.colors[4]}
                selectionColor={props.colors[2]}

                style={{

                    padding: 2,
                    paddingLeft: 12,
                    paddingRight: 12,
                    fontSize: 18,

                    borderWidth: 2,
                    borderRadius: 8,

                    borderColor: (props.alt == true
                        ? props.colors[5]
                        : props.colors[3]),
                }}
            />

            <StatusBar style="auto" />
        </View>
    );
}
