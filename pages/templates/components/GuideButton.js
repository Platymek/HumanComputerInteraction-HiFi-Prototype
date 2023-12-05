import React from 'react';
import { Pressable, Text, View, StyleSheet, Image } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import BigButton from './BigButton';

export default function GuideButton(props) {

    return (

        <View style={{

            flex: 1,
        }}>
            <BigButton

                colors={props.colors}
                source={require('./images/guide.png')}
                title={"Bird Guide"}

                onPress={() => {

                    props.navigation.navigate("Questionnaire");
                }}
            />
        </View>
    );
}