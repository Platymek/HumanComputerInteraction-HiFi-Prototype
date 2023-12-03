import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Container from './Container';

export default function ScrollingBox(props) {

  return (

    <Container
    
      colors={props.colors}
      grey={true}

      style={{

        flex: 1,
        borderRadius:20,
      }}
    >
      <ScrollView

        style={{

          width:'100%',
          height:'100%',

          marginTop:-16,
          marginBottom:-16,
        }}
      >
        {props.children}

      </ScrollView>
    </Container>
  );
}
