import React, { useState } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';

const ToggleButton = ({ onToggle }) => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
    if (onToggle) {
      onToggle(!isToggled);
    }
  };

  return (
    <Pressable onPress={handleToggle} style={styles.container}>
      <View style={[styles.button, isToggled ? styles.toggledButton : null]}>
        <View style={[styles.indicator, isToggled ? styles.toggledIndicator : null]}>
          <View style={styles.outline} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  button: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
  },
  toggledButton: {
    backgroundColor: '#b4e150',
    alignItems: 'flex-end',
  },
  indicator: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'white',
    overflow: 'hidden', 
  },
  toggledIndicator: {
    marginLeft: 'auto',
  },
  outline: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#144751',
    position: 'relative',
  },
});

export default ToggleButton;
