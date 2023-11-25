import { Pressable } from 'react-native';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

import BigButton from './components/BigButton';
import HyperLinkText from './components/HyperLinkText';

/*
    - BigButton Component -

    props:
    - colors: color palette of page
    - buttonName: title of button
    - navigation: navigation object
    - onButtonPress: function on button press
    - hyperText: text of hyperlink
    - hyperLink: text of link in hyperlink
    - hyperPage: page the hyperlink takes the user to
*/

export default function Account(props) {

    return (

        <View style={{

            marginTop: 24,
            marginBottom: 24,

            padding: 16,

            width: 340,
            backgroundColor: props.colors[1],
            borderRadius: 50,

            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 6,
        }}>
            <View

                style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image

                    source={require("../../assets/rspb.png")}

                    style={{

                        width: 50,
                        height: 50,
                    }}
                />
            </View>


            {props.children}


            <View style={{

                padding: 4,
            }} />

            <BigButton

                colors={props.colors}
                title={props.buttonTitle}

                onPress={props.onButtonPress}

                alt={props.alt}
            />

            <View style={{

                padding: 12,
            }} />

            <HyperLinkText

                colors={props.colors}
                text={props.hyperText}
                link={props.linkText}
                alt={!props.alt}

                onPress={() => {

                    props.navigation.navigate(props.hyperPage)
                }}
            />

            <View style={{

                padding: 12,
            }} />
        </View>
    );
}
