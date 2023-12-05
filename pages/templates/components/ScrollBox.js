import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Container from './Container';

export default function ScrollingBox(props) {

    return (

        <Container
    
            colors={props.colors}
            grey={true}

            style={{

                borderRadius: 30,
                padding: 0,
                maxHeight: props.maxHeight,
            }}
        >

            <ScrollView

                style={{

                    width: '100%',
                    height: '100%',
                    padding: 16,
                }}

                contentContainerStyle={{

                    borderRadius: 30,
                    paddingBottom: 16,
                }}
            >
                {props.children}

            </ScrollView>

        </Container>
    );
}
