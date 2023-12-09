import { View, Image } from 'react-native';

import BigButton from './components/BigButton';
import HyperLinkText from './components/HyperLinkText';
import Container from './components/Container';
import SettingsButton from './components/SettingsButton';
import { useState } from 'react';

/*
    - Account Template -

    props:
    - pageColors: color palette of page
    - buttonName: title of button
    - navigation: navigation object
    - onButtonPress: function on button press
    - hyperText: text of hyperlink
    - hyperLink: text of link in hyperlink
    - hyperPage: page the hyperlink takes the user to
*/

export default function Account(props) {

    return (

        <View 
            style={{ 

                padding: 16,
                maxWidth: 500,
                width:'100%'
            }}
        >
            <Container 

                colors={props.colors}
            >
                <View

                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        paddingLeft: 16,
                        paddingRight: 16,
                    }}
                >
                    <Image

                        source={require("../../assets/rspb.png")}

                        style={{

                            width: 50,
                            height: 50,
                        }}
                    />

                    <SettingsButton

                        colors={props.colors}
                        setPageColors={props.setPageColors}
                    />
                </View>

                <View style={{width:'100%'}}>
                    {props.children}
                </View>


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

                        props.navigation.navigate(props.hyperPage, { colors: props.colors })
                    }}
                />
            </Container>
        </View>
    );
}
