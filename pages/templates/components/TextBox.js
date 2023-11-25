import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

/*
    - Textbox Component -

    props:
    - colors: color palette of page
    - title: text above text box
    - placeholder: placeholder text
    - (optional) alt: boolean, colour as red instead of green
*/

export default function TextBox(props) {

    return (

        <View style={{

            paddingTop: 12,
            padding: 4,
        }}>

            <Text style={{

                fontSize: 16,
                fontWeight: 'bold',

                paddingLeft: 4,
                paddingBottom: 4,

                color: (props.alt == true
                    ? props.colors[6]
                    : props.colors[2]),
            }}>

                {props.title}
            </Text>

            <TextInput

                placeholder={props.placeholder}
                placeholderTextColor={props.colors[4]}
                selectionColor={props.colors[2]}

                style={{

                    padding: 2,
                    paddingLeft: 10,
                    paddingRight: 10,

                    width: 320,
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
