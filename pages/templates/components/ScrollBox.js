// ScrollingBox.js
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

export default function ScrollingBox({ children, color }) {
  const boxStyle = {
    borderColor: '#ededed', 
    borderRadius: 15, 
    borderWidth: 2, 
    backgroundColor: color,
    width: 220,
    height: 220,
  };

  const contentContainerStyle = {
    maxWidth: 220,
    maxHeight: 220,
    overflow: 'auto',
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.box, boxStyle]}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={[styles.content, contentContainerStyle]}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    margin: 10,
  },
  content: {
    flex: 1,
  },
});
