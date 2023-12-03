import { Text, View, Image, Pressable } from 'react-native';
import { useState } from 'react';

/*
    - BigButton Component -

    props:
    - colors: color palette of page
    - title: text in big button
    - onPress: function to be performed when the button is pressed
    - (optional) lite: boolean, changes to lite button
    - (optional) source: source of image
    - (optional) alt: boolean, changes to alternate colour when true
    - (optional) small: boolean, changes to small icon
    - (optional) compact: boolean, compact a button
*/

export default function BigButton(props) {

    const [hovering, setHovering] = useState(false);

    const textColor = props.lite
        ? props.alt
            ? props.colors[5]
            : props.colors[3]
        : props.colors[1];

    const buttonColor = props.lite
        ? props.colors[1]
        : props.alt
            ? props.colors[5]
            : props.colors[3];

    const buttonColorPressed = props.lite
        ? props.colors[7]
        : props.alt
            ? props.colors[6]
            : props.colors[2];

    
    function GetShadow(lite) {

        if (!lite){

            return {

                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
            }
        }
    }


    function RenderImage(props) {

        var size = props.small == true
            ? 50
            : 75;

        var marginLeft = props.small == true
            ? 24
            : 0;

        if (props.source != undefined) {

            return (

                <View

                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image

                        source={props.source}

                        style={{

                            width: size,
                            height: size,
                            marginLeft: marginLeft,
                        }}
                    />
                </View>
            )
        }
    }

    function compactStyle(compact){

        if (!compact){

            return { width:'100%' }
        }
    }

    return (

        <View style={[

            { padding: 4, },
            compactStyle(props.compact)
        ]}>

            <Pressable

                onPress={props.onPress}
                unstable_pressDelay={1}

                color={props.alt == true
                    ? props.colors[5]
                    : props.colors[3]}

                style={({ pressed }) => [{

                    backgroundColor: pressed || hovering
                        ? (buttonColorPressed)
                        : (buttonColor),

                    padding: 12,

                    borderRadius: 12,
                    alignItems: 'center',
                }, GetShadow(props.lite)]}

                onHoverIn={() => {

                    setHovering(true);
                }}

                onHoverOut={() => {

                    setHovering(false);
                }}
            >
                <View

                    style={{

                        flexDirection: props.small == true
                            ? 'row'
                            : 'column',

                        flexWrap: 'wrap',

                        alignItems: 'center',
                        justifyContent: 'center',

                        marginLeft: 12,
                        marginRight: 12,
                    }}
                >
                    <Text

                        selectable={false}

                        style={{

                            color: textColor,
                            fontSize: 28,
                            textAlign: 'center'
                        }}
                    >
                        {props.title}
                    </Text>

                    <RenderImage

                        source={props.source}
                        small={props.small}
                    />
                </View>
            </Pressable>
        </View>
    );
}
