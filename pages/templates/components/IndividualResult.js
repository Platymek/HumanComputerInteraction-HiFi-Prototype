import { Text, View, TextInput  } from 'react-native';
import { useState } from "react";
import BirdContainer from './BirdContainer'
import BigButton from "./BigButton";
import Container from "./Container";

/*

    - IndividualResult component -

    props:
    - colors: color palette of page
    - bird: bird
    - place: place in list
*/

export default function IndividualResult(props) {

    return (

        <BirdContainer 
        
            colors={props.colors}
            bird={props.bird}
        >
            <Text style={{

                fontSize: 18,
                marginTop: 18,
                color: props.colors[2]
            }}>
                #{props.place} - population: {props.bird.population}m
            
            </Text>

        </BirdContainer>
    )
}
