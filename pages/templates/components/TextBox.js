import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

/*
    - Textbox Component -

    props:
    - colors: color palette of page
    - title: text above text box
    - placeholder: placeholder text
*/

export default function TextBox(props) {

    return (

        <View style={{

            padding: 4,
        }}>

            <Text style={{

                fontSize: 24,
                paddingLeft: 4,
                color: props.colors[2],
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
                    fontSize: 16,

                    borderWidth: 2,
                    borderRadius: 4,
                    borderColor: props.colors[3],
                }}
            />

            <StatusBar style="auto" />
        </View>
    );
}
