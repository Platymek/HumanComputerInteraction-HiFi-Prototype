import { Image, Pressable } from "react-native";

/*
    - AddButton Component -

    props:
    - colors: color palette of page
    - toggled: boolean, is toggled
    - onToggle: function called on toggle
*/

export default function NewToggle(props) {

    return (

        <Pressable

            style={{

                borderRadius: 999,
                borderWidth: 3,
                borderColor: props.colors[3],

                backgroundColor: props.toggled
                    ? props.colors[3]
                    : props.colors[1],

                justifyContent: 'center',
                alignItems: 'center',

                width: 32,
                height: 32,
            }}

            onPress={props.onToggled}
        >
            <Image

                style={{

                    width: props.toggled
                        ? 20
                        : 16,

                    height: props.toggled
                        ? 20
                        : 16,

                    tintColor: props.toggled
                        ? props.colors[1]
                        : props.colors[3],
                }}

                source={

                    props.toggled
                        ? require('../../../assets/Tick.png')
                        : require('../../../assets/Cross.png')
                }
            />

        </Pressable>
    )
}
