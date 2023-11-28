import { Pressable } from 'react-native';
import { Text, View, Image, StatusBar } from 'react-native';
import BigButton from './BigButton';

/*

    - Header -

    props:
    - colors: color palette of page
    - navigate: navigation class

*/

export default function Header(props) {

    return (
        <View style={{

            justifyContent: "center",
            flexDirection: 'row',
            flexWrap: 'wrap',

            width: '100%',
            height: 70,

            backgroundColor: props.colors[1],

            shadowOpacity: 0.25,
            shadowRadius: 10,
            elevation: 5,
        }}>

            <StatusBar

                backgroundColor={props.colors[1]}
                hidden={false}
                barStyle='dark-content'
            />

            <BigButton

                colors={props.colors}
                title={"Back"}

                onPress={() => {

                    props.navigation.goBack();
                }}
            />

            <Image

                source={require("../../../assets/rspb.png")}

                style={{

                    width: 50,
                    height: 50,
                    margin: 9,
                }}
            />

            <View

                style={{

                    flex: 1,
                    alignItems: 'flex-end',
                    margin: 5,
                    paddingRight: 16,
                }}
            >

                <Text

                    style={{

                        fontWeight: "bold",
                        fontSize: 14,
                        marginBottom: -4,
                    }}
                >

                    session ends

                </ Text>

                <Text

                    style={{

                        fontSize: 32,
                    }}
                >

                    11:36

                </ Text>

            </View>
        </View>
    );
}

/*

                <Image

                    source={require("../../../assets/rspb.png")}

                    style={{

                        width: 50,
                        height: 50,
                        margin: 4,
                    }}
                />
                */
