import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const StartButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function Welcome({ navigation }) {

  const pressHandler = () => {
    navigation.push('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome.
      </Text>
      <StartButton title="start" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF"
  },
  welcome: {
    fontSize: 56,
    fontWeight: '800',
    fontFamily: 'Helvetica',
    color: '#ED3466',
    marginVertical: 150
  },
  buttonContainer: {
    elevation: 6,
    backgroundColor: "#ED3466",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 60
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "800",
    fontFamily: 'Helvetica',
    color: '#FFF'
  }
});