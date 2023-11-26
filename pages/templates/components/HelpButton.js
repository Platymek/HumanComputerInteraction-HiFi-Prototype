import React from 'react';
import { Pressable, Text, View, StyleSheet, Image } from 'react-native';


const HelpButton = ({ onPress }) => { 
  
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View style={styles.buttonContent}>
        <br />
      <Text style={styles.text}>Help and FAQ</Text>
        <Image
          source={require('./images/help.png')}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0e9c58',
    borderRadius: 45,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 145,
    height: 145,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10, 
    fontSize: 20
  },
  image: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain', 
  },
  
});

export default HelpButton;
