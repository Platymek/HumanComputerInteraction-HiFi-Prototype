import React from 'react';
import { Pressable, Text, View, StyleSheet, Image } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; 

const GuideButton = () => {
  const goToGuidePage = () => {
    //guide page link would go here
    console.log('Navigating to guide page');
  };

  return (
    <Pressable onPress={goToGuidePage} style={styles.button}>
      <View style={styles.buttonContent}>
        <br />
      <Text style={styles.text}>Bird Guide</Text>
        <Image
          source={require('./images/guide.png')}
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

export default GuideButton;
