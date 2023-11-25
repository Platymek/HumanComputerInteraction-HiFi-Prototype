import React from 'react';
import { Pressable, Text, View, StyleSheet, Image } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; 

const HelpButton = () => {
  const goToHelpPage = () => {
    //help page link would go here
    console.log('Navigating to help page');
  };

  return (
    <Pressable onPress={goToHelpPage} style={styles.button}>
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
    marginBottom: 10, // Adjust the margin bottom as needed
    fontSize: 20
  },
  image: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain', 
  },
  
});

export default HelpButton;
