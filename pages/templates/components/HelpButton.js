import React from 'react';
import { Pressable, Text, View, StyleSheet, Image } from 'react-native';
import BigButton from './BigButton';


export default function HelpButton(props){ 
  
    return (
        <View style={{

            flex: 1,
        }}>
            <BigButton

                colors={props.colors}
                source={require('./images/help.png')}
                title={"Help and FAQ"}

                onPress={() => {

                    props.navigation.navigate("Help", { colors: props.colors });
                }}
            />
        </View>
    );
};
