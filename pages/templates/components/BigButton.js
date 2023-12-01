import { Pressable } from 'react-native';
import { Text, View, Image } from 'react-native';

/*
    - BigButton Component -

    props:
    - colors: color palette of page
    - title: text in big button
    - onPress: function to be performed when the button is pressed
    - (optional) source: source of image
    - (optional) alt: changes to alternate colour when true
    - (optional) small: changes to small icon
*/

export default function BigButton(props) {

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

    return (

        <View style={{

            padding: 4,
        }}>

            <Pressable

                onPress={props.onPress}
                unstable_pressDelay={1}

                color={props.alt == true
                    ? props.colors[5]
                    : props.colors[3]}

                style={({ pressed }) => [{

                    backgroundColor: pressed

                        ? (props.alt == true
                            ? props.colors[6]
                            : props.colors[2])

                        : (props.alt == true
                            ? props.colors[5]
                            : props.colors[3]),

                    padding: 12,

                    borderRadius: 12,
                    alignItems: 'center',

                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }]}
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

                            color: props.colors[1],
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
