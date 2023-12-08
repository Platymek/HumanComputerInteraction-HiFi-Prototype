import { Text, View, Image, StatusBar } from 'react-native';
import BigButton from './BigButton';
import NavButton from './NavButton';
import SettingsButton from './SettingsButton';

/*

    - Header -

    props:
    - colors: color palette of page
    - navigation: navigation class
    - (optional) hideBack: hide back button
    - (optional) hideHome: hide home button
	- (optional) admin: admin results page

*/

export default function Header(props) {


    function GetNavButton(admin) {

        if (admin) {

            return (

                <BigButton

                    colors={props.colors}
                    lite={true}
                    title={"Sign Out"}
                    compact={true}

                    onPress={() => {

                        props.navigation.navigate("Admin");
                    }}
                />
            )
        }

        return (
            <View style={{

                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'center',
            }}>
                <NavButton

                    source={require("../../../assets/back.png")}

                    colors={props.colors}
                    size={40}
                    visible={props.hideBack == true}

                    onPress={() => props.navigation.goBack()}
                />

                <NavButton

                    source={require("../../../assets/home.png")}

                    colors={props.colors}
                    size={45}
                    visible={props.hideHome == true}

                    onPress={() => {

                        props.navigation.navigate("Home");
                    }}
                />

            </View>
        )
    }

    return (

        <View style={{

            alignItems: 'center',
            justifyContent: 'center',

            width: '100%',
            minHeight: 70,

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

            <View style={{

                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',

                justifyContent: 'space-between',

                width: '100%',
                maxWidth: 800,
            }}>

                <View style={{

                    flexDirection: 'row',
                    flexWrap: 'wrap',

                    alignItems: 'center',
                }}>
                    { GetNavButton(props.admin) }

                    <Image

                        source={require("../../../assets/rspb.png")}

                        style={{

                            width: 50,
                            height: 50,
                            margin: 9,
                        }}
                    />

                    <SettingsButton

                        colors={props.colors}
                        visible={props.hideHome != true}
                    />

                </View>

                <View

                    style={{

                        margin: 5,
                        paddingRight: 16,
                    }}
                >

                    <Text

                        style={{

                            fontWeight: "bold",
                            fontSize: 14,
                            marginBottom: -4,
                            color: props.colors[2],
                        }}
                    >

                        session ends

                    </ Text>

                    <Text

                        style={{

                            fontSize: 32,
                            color: props.colors[2],
                        }}
                    >

                        11:36

                    </ Text>

                </View>
            </View>
        </View>
    );
}
